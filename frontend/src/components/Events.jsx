

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Adva from './Adva';

function Events() {
  const [events, setEvents] = useState([]);
  const [info, setInfo] = useState(null);
  const [addNewEvent, setAddNewEvent] = useState(false);
  const [alter,setAlter]=useState(1)
  let eventName=useRef()
  useEffect(() => {
   
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:4000/events');
        setEvents(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [alter]);

  const convertToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  function handleInfo(e) {
    console.log(eventName.current.value);
    console.log(e);
    const info = events.filter((event) => event.title ===eventName.current.value );
    setInfo(info);
    console.log(info);
    setAddNewEvent(null);
    setAlter(alter+1)
  }

  return (
    <div className='Container'>
      <div className='d-flex flex-row m-4' >
      <div className=" ">
      <select name="" id="" ref={eventName}  onChange={(e) => handleInfo(e)}>
        <option value="Events">Events</option>
        {
          events.map((event)=>(
            <option 
            key={event.eventId}
            value={event.title}
            >{event.title}</option>
          ))
        }
      </select>
      <button
      className="btn btn-primary ms-5"
      onClick={() => {
        setAddNewEvent(true);
        setInfo(null);
        setAlter(alter+1)
      }}
    >
      Add New Event
    </button>
    </div>
    
      </div>
      <div className=' w-100'>
      <div className="">
    {addNewEvent ? (
      <div>
        <h4 className="mb-4">Add New Event</h4>
        <Adva />
      </div>
    ) : null}
    {info &&
      info.map((event) => (
        <div key={event.eventId} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <div className="d-flex flex-wrap">
              {event.images.map((image, i) => (
                <img
                  key={i}
                  className="ms-3 mb-3 rounded"
              
                  height="200px"
                  width="200px"
                  src={`data:image/jpeg;base64,${convertToBase64(image.image.data)}`}
                  alt=""
                />
              ))}
               </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
   
  );
}

export default Events;




{/* <div className="container py-4">
<div className="row">
  <div className="col-md-6">
    <div className="">
      <select name="" id="" ref={eventName}  onChange={(e) => handleInfo(e)}>
        <option value="Events">Events</option>
        {
          events.map((event)=>(
            <option 
            key={event.eventId}
            value={event.title}
            >{event.title}</option>
          ))
        }
      </select>
    </div>
    <button
      className="btn btn-primary mt-4"
      onClick={() => {
        setAddNewEvent(true);
        setInfo(null);
        setAlter(alter+1)
      }}
    >
      Add New Event
    </button>
  </div>
  <div className="col-md-6">
    {addNewEvent ? (
      <div>
        <h4 className="mb-4">Add New Event</h4>
        <Adva />
      </div>
    ) : null}
    {info &&
      info.map((event) => (
        <div key={event.eventId} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <div className="d-flex flex-wrap">
              {event.images.map((image, i) => (
                <img
                  key={i}
                  className="ms-3 mb-3"
                  height="100px"
                  width="100px"
                  src={`data:image/jpeg;base64,${convertToBase64(image.image.data)}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
</div> */}
