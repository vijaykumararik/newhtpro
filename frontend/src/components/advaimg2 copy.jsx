
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Advaimg2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:4000/advertises');
      setImages(res.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const convertToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleDeleteImage = async (imageId) => {
    try {
      await axios.delete(`http://localhost:4000/advertises/${imageId}`);
      // Fetch updated images after deletion
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div>
      <h2>Advertise Gallery</h2>
      <div className="d-flex flex-wrap m-2">
        {images.map((advertise, index) => (
          <div key={index}>
            <img
              className="ms-5 mb-2"
              height="250px"
              width="250px"
              src={`data:image/jpeg;base64,${convertToBase64(advertise.advertise.data)}`}
              alt=""
            />
            <button onClick={() => handleDeleteImage(advertise._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advaimg2;

