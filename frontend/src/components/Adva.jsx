// import React, { useState } from 'react';
// import axios from 'axios';
// import Advaimg from './Advaimg';


// const Adva = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:4000/upload', formData);
      
//       if (response.status === 200) {
//         setImageUrl(response.data.imageUrl);
//       } else {
//         throw new Error('Image upload failed');
//       }
//     } catch (error) {
//       console.error('Error during image upload:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleFormSubmit}>
//           <input type="file" onChange={handleFileChange} name="image" />
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       <Advaimg/>
//     </div>
//   );
// };

// export default Adva;


import React, { useState } from 'react';
import axios from 'axios';
import Advaimg from './Advaimg';

const Adva = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [eventData, setEventData] = useState({
    eventId: '',
    title: '',
    description: '',
  });
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 15); // Restricting to a maximum of 15 images
    setSelectedFiles(files);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('eventId', eventData.eventId);
      formData.append('title', eventData.title);
      formData.append('description', eventData.description);

      selectedFiles.forEach((file) => {
        formData.append('images', file);
      });

      const response = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setImageUrls(response.data.imageUrls);
      } else {
        throw new Error('Event upload failed');
      }
    } catch (error) {
      console.error('Error during event upload:', error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Event ID:</label>
            <input type="text" name="eventId" value={eventData.eventId} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={eventData.title} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={eventData.description} onChange={handleInputChange} required />
          </div>
          <div>
            <input type="file" onChange={handleFileChange} name="images" multiple required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <Advaimg /> */}
    </div>
  );
};

export default Adva;
