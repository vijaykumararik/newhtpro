

import React, { useState, useRef } from 'react';
import axios from 'axios';

const Registration = () => {
//   const formRef = useRef(null);
let  userName=useRef();
let  phoneNo=useRef();
let  email=useRef();
let  password=useRef();
let  confirmPassword=useRef();
let  personalAddress=useRef();
let  state=useRef();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
        userName: userName.current.value,
        phoneNo: phoneNo.current.value,
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
        personalAddress: personalAddress.current.value,
        state: state.current.value,
        // zipcode: userName.current.value,
        // companyName: userName.current.value,
        // companyContactNo: userName.current.value,
        // companyAddress: userName.current.value,
        // companyState: userName.current.value,
        // companyZipcode: userName.current.value,
        // gstn: userName.current.value,
        // businessLocation: userName.current.value,
        // businessCategory: userName.current.value,
        // businessType: userName.current.value,
        // businessDescription: userName.current.value,
        // image: userName.current.value,
        // video: userName.current.value
    }
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:4000/registration', formData);
      console.log(response.data); // Data saved successfully
      // Reset the form here if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Registration Form</h1>
      <form className="mt-4" onSubmit={onFinish}>
        {/* Rest of the form fields */}
        {/* ... */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input type="text" className="form-control" id="userName" name="userName" ref={userName} />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">
            Phone No
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="text" className="form-control" id="phoneNo" name="phoneNo" ref={phoneNo} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input type="email" className="form-control" id="email" name="email" ref={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" name="password" ref={password}  />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPassword}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="personalAddress" className="form-label">
            Personal Address
          </label>
          <input
            type="text"
            className="form-control"
            id="personalAddress"
            name="personalAddress"
            ref={personalAddress}
            
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="state" name="state" ref={state} />
          </div>
          <div className="col-md-6">
            <label htmlFor="zipcode" className="form-label">
              ZipCode
            </label>
            <input type="text" className="form-control" id="zipcode" name="zipcode"  />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input type="text" className="form-control" id="companyName" name="companyName"  />
        </div>
        <div className="mb-3">
          <label htmlFor="companyContactNo" className="form-label">
            Company Contact No
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input
              type="text"
              className="form-control"
              id="companyContactNo"
              name="companyContactNo"
              
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="companyAddress" className="form-label">
            Company Address
          </label>
          <input
            type="text"
            className="form-control"
            id="companyAddress"
            name="companyAddress"
            
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="companyState" className="form-label">
              Company State
            </label>
            <input type="text" className="form-control" id="companyState" name="companyState" />
          </div>
          <div className="col-md-6">
            <label htmlFor="companyZipcode" className="form-label">
              Company ZipCode
            </label>
            <input type="text" className="form-control" id="companyZipcode" name="companyZipcode"  />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="gstn" className="form-label">
            GSTN
          </label>
          <input type="text" className="form-control" id="gstn" name="gstn"  />
        </div>
        <div className="mb-3">
          <label htmlFor="businessLocation" className="form-label">
            Business Location
          </label>
          <input
            type="text"
            className="form-control"
            id="businessLocation"
            name="businessLocation"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="businessCategory" className="form-label">
            Business Category
          </label>
          <select className="form-select"id="businessCategory" name="businessCategory" >
            <option value="">Select Category</option>
            <option value="86">+91</option>
            <option value="87">+81</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessType" className="form-label">
            Business Type
          </label>
          <select className="form-select" id="businessType" name="businessType" >
            <option value="">Select Type</option>
            <option value="86">+91</option>
            <option value="87">+81</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessDescription" className="form-label">
            Business Description
          </label>
          <textarea
            className="form-control"
            id="businessDescription"
            name="businessDescription"
            rows="3"
            
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input type="file" className="form-control" id="image" name="image" />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">
            YouTube Video Link
          </label>
          <input type="url" className="form-control" id="video" name="video" />
        </div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AgOlyOEkNEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Registration;



