
// import React, { useState } from 'react';
// import axios from 'axios';

// const Registration = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/registration', values);
//       console.log(response.data); // Data saved successfully
//       // Reset the form here if needed
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Registration Form</h1>
//       <form className="mt-4" onSubmit={onFinish}>
//         {/* Rest of the form fields */}
//         {/* ... */}
//         {/* UserName */}
//         <div className="mb-3">
//           <label htmlFor="userName" className="form-label">
//             UserName
//           </label>
//           <input type="text" className="form-control" id="userName" required />
//         </div>
//         {/* Phone No */}
//         <div className="mb-3">
//           <label htmlFor="phoneNo" className="form-label">
//             Phone No
//           </label>
//           <div className="input-group">
//             <span className="input-group-text">+91</span>
//             <input type="text" className="form-control" id="phoneNo" required />
//           </div>
//         </div>
//         {/* E-mail */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             E-mail
//           </label>
//           <input type="email" className="form-control" id="email" required />
//         </div>
//         {/* Password */}
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input type="password" className="form-control" id="password" required />
//         </div>
//         {/* Confirm Password */}
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">
//             Confirm Password
//           </label>
//           <input type="password" className="form-control" id="confirmPassword" required />
//         </div>
//         {/* Personal Address */}
//         <div className="mb-3">
//           <label htmlFor="personalAddress" className="form-label">
//             Personal Address
//           </label>
//           <input type="text" className="form-control" id="personalAddress" required />
//         </div>
//         {/* State */}
//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label htmlFor="state" className="form-label">
//               State
//             </label>
//             <input type="text" className="form-control" id="state" required />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="zipcode" className="form-label">
//               ZipCode
//             </label>
//             <input type="text" className="form-control" id="zipcode" required />
//           </div>
//         </div>
//         {/* Company Name */}
//         <div className="mb-3">
//           <label htmlFor="companyName" className="form-label">
//             Company Name
//           </label>
//           <input type="text" className="form-control" id="companyName" required />
//         </div>
//         {/* Company Contact No */}
//         <div className="mb-3">
//           <label htmlFor="companyContactNo" className="form-label">
//             Company Contact No
//           </label>
//           <div className="input-group">
//             <span className="input-group-text">+91</span>
//             <input type="text" className="form-control" id="companyContactNo" required />
//           </div>
//         </div>
//         {/* Company Address */}
//         <div className="mb-3">
//           <label htmlFor="companyAddress" className="form-label">
//             Company Address
//           </label>
//           <input type="text" className="form-control" id="companyAddress" required />
//         </div>
//         {/* Company State */}
//         <div className="row mb-3">
//           <div className="col-md-6">
//             <label htmlFor="companyState" className="form-label">
//               Company State
//             </label>
//             <input type="text" className="form-control" id="companyState" required />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="companyZipcode" className="form-label">
//               Company ZipCode
//             </label>
//             <input type="text" className="form-control" id="companyZipcode" required />
//           </div>
//         </div>
//         {/* GSTN */}
//         <div className="mb-3">
//           <label htmlFor="gstn" className="form-label">
//             GSTN
//           </label>
//           <input type="text" className="form-control" id="gstn" required />
//         </div>
//         {/* Business Location */}
//         <div className="mb-3">
//           <label htmlFor="businessLocation" className="form-label">
//             Business Location
//           </label>
//           <input type="text" className="form-control" id="businessLocation" required />
//         </div>
//         {/* Business Category */}
//         <div className="mb-3">
//           <label htmlFor="businessCategory" className="form-label">
//             Business Category
//           </label>
//           <select className="form-select" id="businessCategory" required>
//             <option value="">Select Category</option>
//             <option value="86">+91</option>
//             <option value="87">+81</option>
//           </select>
//         </div>
//         {/* Business Type */}
//         <div className="mb-3">
//           <label htmlFor="businessType" className="form-label">
//             Business Type
//           </label>
//           <select className="form-select" id="businessType" required>
//             <option value="">Select Type</option>
//             <option value="86">+91</option>
//             <option value="87">+81</option>
//           </select>
//         </div>
//         {/* Business Description */}
//         <div className="mb-3">
//           <label htmlFor="businessDescription" className="form-label">
//             Business Description
//           </label>
//           <textarea className="form-control" id="businessDescription" rows="3" required></textarea>
//         </div>
//         {/* Upload */}
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Upload Image
//           </label>
//           <input type="file" className="form-control" id="image" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Upload videolink
//           </label>
//           <input type="url" className="form-control" id="video" />
//         </div>
//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Loading...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/registration', values);
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
          <input type="text" className="form-control" id="userName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">
            Phone No
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="text" className="form-control" id="phoneNo" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="confirmPassword" required />
        </div>
        <div className="mb-3">
          <label htmlFor="personalAddress" className="form-label">
            Personal Address
          </label>
          <input type="text" className="form-control" id="personalAddress" required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="state" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="zipcode" className="form-label">
              ZipCode
            </label>
            <input type="text" className="form-control" id="zipcode" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input type="text" className="form-control" id="companyName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="companyContactNo" className="form-label">
            Company Contact No
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="text" className="form-control" id="companyContactNo" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="companyAddress" className="form-label">
            Company Address
          </label>
          <input type="text" className="form-control" id="companyAddress" required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="companyState" className="form-label">
              Company State
            </label>
            <input type="text" className="form-control" id="companyState" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="companyZipcode" className="form-label">
              Company ZipCode
            </label>
            <input type="text" className="form-control" id="companyZipcode" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="gstn" className="form-label">
            GSTN
          </label>
          <input type="text" className="form-control" id="gstn" required />
        </div>
        <div className="mb-3">
          <label htmlFor="businessLocation" className="form-label">
            Business Location
          </label>
          <input type="text" className="form-control" id="businessLocation" required />
        </div>
        <div className="mb-3">
          <label htmlFor="businessCategory" className="form-label">
            Business Category
          </label>
          <select className="form-select" id="businessCategory" required>
            <option value="">Select Category</option>
            <option value="86">+91</option>
            <option value="87">+81</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessType" className="form-label">
            Business Type
          </label>
          <select className="form-select" id="businessType" required>
            <option value="">Select Type</option>
            <option value="86">+91</option>
            <option value="87">+81</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessDescription" className="form-label">
            Business Description
          </label>
          <textarea className="form-control" id="businessDescription" rows="3" required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input type="file" className="form-control" id="image" />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">
            YouTube Video Link
          </label>
          <input type="url" className="form-control" id="video" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Registration;


