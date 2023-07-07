// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Advaimg = () => {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     const fetchImages = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:4000/images');
// //         setImages(res.data);
// //       } catch (error) {
// //         console.error('Error fetching images:', error);
// //       }
// //     };

// //     fetchImages();
// //   }, []);

// //   const convertToBase64 = (buffer) => {
// //     let binary = '';
// //     const bytes = new Uint8Array(buffer);
// //     const len = bytes.byteLength;
// //     for (let i = 0; i < len; i++) {
// //       binary += String.fromCharCode(bytes[i]);
// //     }
// //     return window.btoa(binary);
// //   };

// //   return (
// //     <div>
// //       <h2>Image Gallery</h2>
// //       <div className='d-flex flex-wrap m-2'>
// //         {images.map((image, index) => (
// //           <div key={index}>
// //             <img
// //               className='ms-5 mb-2'
// //               height='250px'
// //               width='250px'
// //               src={`data:image/jpeg;base64,${convertToBase64(image.image.data)}`}
// //               alt=''
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Advaimg;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Advaimg = ({title}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:4000/events');
        setEvents(res.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const convertToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <div>
      <h2>Event Gallery</h2>
      <div className='d-flex flex-wrap m-2'>
        {events.map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.images.map((image, i) => (
              <img
                key={i}
                className='ms-5 mb-2'
                height='250px'
                width='250px'
                src={`data:image/jpeg;base64,${convertToBase64(image.image.data)}`}
                alt=''
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advaimg;

