
import { Container, Form, Button } from 'react-bootstrap';

import Events from "./Events";
import Gallary from "./Gallary";
import Nav1 from "./Navbar";
import Footer from "./footer";
import Home from "./home";
import Login from "./login";
import Registration from "./Registration";
import {Route, Routes,BrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react"
import  Modal from "react-modal";
import Advertise1 from './Advertise1';
import About from './about/About';
import Members from './Members';
import Membersdetails from './Membersdetails';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};

const Homeportal = () => {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  let navigate=useNavigate();

  let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsOpen(true);
  //   },5000)
  // },[])
    // function openModal() {
    //   setIsOpen(true);
    // }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values using the state variables (fullName, email, phoneNumber)
      };
    return ( 
  

<div className="HomePortal">
           <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
               <Container>
                <p className='text-primary'>Please submit your information below</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit"  className='my-3'
        onClick={()=>{
          closeModal()
          navigate("/")}}>
          Submit
        </Button>
      </Form>
    </Container>  
            </Modal>
        <Nav1/>
          <Routes>
            <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Registration/>} />
          {/* <Route path='/singup' element={<signUp/>} /> */}
          <Route path="/gallary" element={<Gallary/>} />
          <Route path="/allevents" element={<Events/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/membersdetails/:id" element={<Membersdetails/>} />
          <Route path="/a" element={<Advertise1/>} />
          </Routes>
          <Footer/>
  </div>
        
  
      
     );
}
 
export default Homeportal;
