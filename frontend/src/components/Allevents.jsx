
import React, { useEffect, useRef, useState } from 'react';
function Allevents() {
  const title = useRef();
  const description = useRef();
  const images = useRef();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  
    const [eventUpdate, setEventUpdate] = useState(null);
  const [newImages, setNewImages] = useState([]);
// featch details
useEffect(()=>{
  fetch("http://localhost:4000/getevents")
  .then((res=>res.json()))
  .then((data)=>{
    setEvents(data)
    console.log(data);
    let allimages=data.images
    // console.log(all);
  })
  .catch ((error)=> {
    console.log(error);
    setError('Failed to fetch events');
  })
},[])
  const addImages = (e) => {
    e.preventDefault();
    const files = images.current.files;
    const maxImages = 15;
    const selectedImages = Array.from(files).slice(0, maxImages);
    // let newarr=selectedImages.map((m)=>{
    //   return m.name
    // })
    // console.log(newarr);
    // setNewImages(newarr);
    setNewImages(selectedImages)
    console.log(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title.current.value,
      description: description.current.value,
      images: newImages,
    };
    console.log(newEvent);

    fetch('http://localhost:4000/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
      .then(() => {
        setEventUpdate('New event added successfully');
      })
      .catch(() => {
        setEventUpdate('Failed to add event. Please try again.');
      });
  };

  return (
    <>
    <img src="" alt="" />
    <div className="addevents">
      <h4>Add new event here</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter title" ref={title} />
        <input type="text" placeholder="Enter description" ref={description} />
        <input   type="file" accept="image/*" multiple ref={images}  />
        <button onClick={addImages}>Add Images</button>
        <input type="submit" value="Submit" />
        {eventUpdate && <h2 style={{ color: 'green' }}>{eventUpdate}</h2>}
      </form>
    </div>
    <div className="displayevnts">
    <h4>All Events</h4>
      {events.map((event) => (
        <div key={event._id}>
          <h5>{event.title}</h5>
          <p>{event.description}</p>
          <ul>
          {/* {event.images.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt={`Image ${index + 1}`}
        />   
      ))} */}
          </ul>
        </div>
      ))}
      {error && <p>{error}</p>}
    

    </div>
    </>

  );
}

export default Allevents;
