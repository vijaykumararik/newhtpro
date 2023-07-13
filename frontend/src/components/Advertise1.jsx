

import React, { useState } from 'react';
import axios from 'axios';
import Advertiseimage from './advertiseimage';
import Advaimg2 from './advaimg2';
import Advaimg1 from './advimg1';

const Advertise1 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('image', selectedFiles[i]);
    }

    try {
      const response = await axios.post('http://localhost:4000/upload', formData);

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
          <label htmlFor="">Add images for advatise 1
          <input type="file" onChange={handleFileChange}  name="image" accept="image/*" multiple /> </label>
          <button type="submit">Upload</button>
        </form>
      </div>
      <Advertiseimage/>
      <Advaimg2 />
      <Advaimg1/>
    </div>
  );
};

export default Advertise1;
