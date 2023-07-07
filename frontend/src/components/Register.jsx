import React, { useState } from 'react';
 function Register() {
  const [personName, setPersonName] = useState('');
   const [personNumber, setPersonNumber] = useState('');
  const [email, setEmail] = useState('');
  const [personAddress, setPersonAddress] = useState('');
   const [companyName, setCompanyName] = useState('');
  const [companyContactNo, setCompanyContactNo] = useState('');
   const [companyAddress, setCompanyAddress] = useState('');
  const [gstn, setGstn] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessType, setBusinessType] = useState('');
 const [businessDescription, setBusinessDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();

      let newdata={personName:personName}

    
     fetch('http://localhost:4000/register', {
          method: 'POST',
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(newdata),
        }).then(()=>{
          console.log("done");
        })
      }
        

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="personName">Person Name:</label>
          <input
            type="text"
            id="personName"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personNumber">Person Number:</label>
          <input
            type="text"
            id="personNumber"
            value={personNumber}
            onChange={(e) => setPersonNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personAddress">Person Address:</label>
          <input
            type="text"
            id="personAddress"
            value={personAddress}
            onChange={(e) => setPersonAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyContactNo">Company Contact No:</label>
          <input
            type="text"
            id="companyContactNo"
            value={companyContactNo}
            onChange={(e) => setCompanyContactNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyAddress">Company Address:</label>
          <input
            type="text"
            id="companyAddress"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gstn">GSTN:</label>
          <input
            type="text"
            id="gstn"
            value={gstn}
            onChange={(e) => setGstn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="businessLocation">Business Location:</label>
          <input
            type="text"
            id="businessLocation"
            value={businessLocation}
            onChange={(e) => setBusinessLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="businessType">Business Type:</label>
          <input
            type="text"
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="businessDescription">Business Description:</label>
          <textarea
            id="businessDescription"
            value={businessDescription}
            onChange={(e) => setBusinessDescription(e.target.value)}
          />
        </div>
        <div>
      <label htmlFor="imageFile">Image File:</label>
           <input
            type="file"
            id="imageFile"
            accept="image/jpeg,image/png"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="videoFile">Video File:</label>
          <input
            type="file"
            id="videoFile"
            accept="video/mp4"
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
 }

export default Register