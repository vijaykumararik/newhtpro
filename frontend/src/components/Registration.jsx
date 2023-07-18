
import React, { useState, useRef } from 'react';
import axios from 'axios';


const Registration = () => {
  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  let userName = useRef();
  let phoneNo = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();
  let personalAddress = useRef();
  let state = useRef();
  let country = useRef();
  let city=useRef();
  let zipcode = useRef();
  let companyName = useRef();
  let companyContactNo = useRef();
  let companyAddress = useRef();
  let companyState = useRef();
  let companyCountry = useRef();
  let companyCity=useRef();
  let companyZipcode = useRef();
  let gstn = useRef();
  let businessLocation = useRef();
  let headbranch=useRef();
  let subbranch1=useRef();
  let subbranch2=useRef();
  let businessCategory = useRef();
  let businessType = useRef();
  let plan = useRef();
  let businessDescription = useRef();
  let image = useRef();
  let video = useRef();
  

  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imgs, setimgs] = useState([]);
 

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 15); // Restricting to a maximum of 15 images
  setSelectedFiles(files)
  };
  const onFinish = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('userName', userName.current.value);
    formData.append('phoneNo', phoneNo.current.value);
    formData.append('email', email.current.value);
    formData.append('password', password.current.value);
    formData.append('confirmPassword', confirmPassword.current.value);
    formData.append('personalAddress', personalAddress.current.value);
    formData.append('state', state.current.value);
    formData.append('country', country.current.value);
    formData.append('city', city.current.value);
    formData.append('zipcode', zipcode.current.value);
    formData.append('companyName', companyName.current.value);
    formData.append('companyContactNo', companyContactNo.current.value);
    formData.append('companyAddress', companyAddress.current.value);
    formData.append('companyState', companyState.current.value);
    formData.append('companyCountry', companyCountry.current.value);
    formData.append('companyCity', companyCity.current.value);
    formData.append('companyZipcode', companyZipcode.current.value);
    formData.append('gstn', gstn.current.value);
    formData.append('businessLocation', businessLocation.current.value);
    formData.append('headbranch', headbranch.current.value);
    formData.append('subbranch1', subbranch1.current.value);
    formData.append('subbranch2', subbranch2.current.value);
    formData.append('businessCategory', businessCategory.current.value);
    formData.append('businessType', businessType.current.value);
    formData.append('plan', plan.current.value);
    formData.append('businessDescription', businessDescription.current.value);
    selectedFiles.forEach((file) => {
      formData.append('images', file);
    });
    formData.append('video', video.current.value);
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:4000/registration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Data saved successfully
      // Reset the form here if needed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5 w-75">
      <h1 className="text-center">Registration Form</h1>
      <form className="mt-4" onSubmit={onFinish}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">UserName </label>
          <input type="text" className="form-control" id="userName" name="userName" ref={userName}  />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" maxLength={10} className="form-label">
            Phone No
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="number tel" maxLength="10"className="form-control" id="phoneNo" name="phoneNo" ref={phoneNo}  />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input type="email" className="form-control" id="email" name="email" ref={email}  />
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
          <div className="col-md-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select className="form-control " id="State" name='State' ref={state} >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select className="form-control " id="country" name='country' ref={country} >
              <option value="">Select a Country</option>
              {countries.map((countries, index) => (
                <option key={index} value={countries}>
                  {countries}
                </option>
              ))}
            </select>
            {/* <input type="text" className="form-control" id="country" name='country' ref={country}  /> */}
          </div>
          <div className="col-md-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city" name="city" ref={city}  />
          </div>
          <div className="col-md-3">
            <label htmlFor="zipcode" className="form-label">
              PinCode
            </label>
            <input type="text" className="form-control" id="zipcode" name="zipcode" ref={zipcode}  />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input type="text" className="form-control" id="companyName" name="companyName" ref={companyName}  />
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
              ref={companyContactNo}
              

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
            ref={companyAddress}
            

          />
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="companyCountry" className="form-label">
              Company State
            </label>
            <select className="form-control " id="companyState" name='companyState' ref={companyState} >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {/* <input type="text" className="form-control" id="companyState" name="companyState"  ref={companyState} /> */}
          </div>
          <div className="col-md-3">
            <label htmlFor="companyCountry" className="form-label">
              Company Country
            </label>
            <select className="form-control " id="companyCountry" name='companyCountry' ref={companyCountry} >
              <option value="">Select a Country</option>
              {countries.map((countries, index) => (
                <option key={index} value={countries}>
                  {countries}
                </option>
              ))}
            </select>
            {/* <input type="text" className="form-control" id="companyCountry" name="companyCountry"  ref={companyCountry} /> */}
          </div>
          <div className="col-md-3">
            <label htmlFor="companyCity" className="form-label">
              Company City
            </label>
            <input type="text" className="form-control" id="companyCity" name="companyCity" ref={companyCity}  />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyZipcode" className="form-label">
              Company ZipCode
            </label>
            <input type="text" className="form-control" id="companyZipcode" name="companyZipcode" ref={companyZipcode}  />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="gstn" className="form-label">
            GSTN
          </label>
          <input type="text" className="form-control" id="gstn" name="gstn" ref={gstn}  />
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
            ref={businessLocation}
            
          />
        </div>
        <div className="row mb-3">
        <div className="col-md-3">
            <label htmlFor="headbranch" className="form-label">
              Head Branch
            </label>
            <input type="text" className="form-control" id="headbranch" name="headbranch" ref={headbranch}  />
          </div>
          <div className="col-md-3">
            <label htmlFor="subbranch1" className="form-label">
              Sub Branch 1
            </label>
            <input type="text" className="form-control" id="subbranch1" name="subbranch1" ref={subbranch1}  />
          </div>
          <div className="col-md-3">
            <label htmlFor="subbranch2" className="form-label">
              Sub Branch2
            </label>
            <input type="text" className="form-control" id="subbranch2" name="subbranch2" ref={subbranch2}  />
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="businessCategory" className="form-label" >
            Business Category
          </label>
          <select className="form-select" id="businessCategory" ref={businessCategory} >
            <option value="">Select Category</option>
            <option value="Infromation Technology">Infromation Technology</option>
            <option value="Fashion Industry">Fashion Industry</option>
            <option value="Interiors-Architecture">Interiors-Architecture</option>
            <option value="Health Care">Health Care</option>
            <option value="Eduvation & Training">Eduvation & Training</option>
            <option value="HR">HR</option>
            <option value="Clothing">Clothing</option>
            <option value="Water Treatment">Water Treatment</option>
            <option value="Vastu">Vastu</option>
            <option value="Civil Custruction">Civil Custruction</option>
            <option value="Skin Care & Beauty">Skin Care & Beauty</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Events & Tourism">Events & Tourism</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessType" className="form-label">
            Business Type
          </label>
          <select className="form-select" id="businessType" ref={businessType} >
            <option value="">Select Type</option>
            <option value="Hardware-Sales">Hardware-Sales</option>
            <option value="Hardware-Service">Hardware-Service</option>
            <option value="Software- Sales">Software- Sales</option>
            <option value="Software- Service">Software- Service</option>
            <option value="Software-Training">Software-Training</option>
            <option value="Software Dveleopment">Software Dveleopment</option>
            <option value="Software-Architechture">Software-Architechture</option>
            <option value="Womens Fashion Designer">Womens Fashion Designer</option>
            <option value="Fashion Shows & Events">Fashion Shows & Events</option>
            <option value="Mens Fashin Designer">Mens Fashin Designer</option>
            <option value="Kinds Fashion Designer">Kinds Fashion Designer</option>
            <option value="Interior Decorators">Interior Decorators</option>
            <option value="Interior Suppliers">Interior Suppliers</option>
            <option value="Interior Architects">Interior Architects</option>
            <option value="Interior Designers">Interior Designers</option>
            <option value="Interiors Manufactures">Interiors Manufactures</option>
            <option value="Interiors Office Furnitures">Interiors Office Furnitures</option>
            <option value="Interiors Office Supplies">Interiors Office Supplies</option>
            <option value="Scicologist">Scicologist</option>
            <option value="Stiching">Stiching</option>
            <option value="Readymade Dress">Readymade Dress</option>
            <option value="Raki">Raki</option>
            <option value="Healing">Healing</option>
            <option value="Vastu Consultants">Vastu Consultants</option>
            <option value="Travel Guide">Travel Guide</option>
            <option value="Resorts">Resorts</option>
            <option value="Hotels">Hotels</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Planes" className="form-label">
            Plan
          </label>
          <select className="form-select" id="planes" ref={plan} >
            <option value="">Select Type</option>
            <option value="86">GOLD</option>
            <option value="87">SILVER</option>
            <option value="87">PLATINUM</option>
            <option value="87">DIAMOND</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessDescription" className="form-label" ref={businessDescription} >
            Business Description
          </label>
          <textarea
            className="form-control"
            id="businessDescription"
            name="businessDescription"
            rows="3"
            ref={businessDescription}

          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label" >
            Upload Image</label>
          {/* <input type="file" className="form-control" id="image" name="image" ref={image}  /> */}
          <input type="file"  className="form-control" id="image" onChange={handleFileChange} name="images" multiple  />

        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">
            YouTube Video Link
          </label>
          <input type="url" className="form-control" id="video" name="video" ref={video}  />
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








