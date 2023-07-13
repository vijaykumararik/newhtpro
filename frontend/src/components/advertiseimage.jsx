import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdvertiseImage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('advertise', selectedFiles[i]);
    }

    try {
      const response = await axios.post('http://localhost:4000/advertise', formData);

      if (response.status === 200) {
        setUploadSuccess(true);
        alert('Images added successfully');
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileChange} name="advertise" multiple />
          <button type="submit">Upload</button>
        </form>
      </div>
      
    </div>
  );
};

export default AdvertiseImage;

