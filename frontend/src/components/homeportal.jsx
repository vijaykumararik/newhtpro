// import Allevents from "./Allevents";
import Events from "./Events";
import Gallary from "./Gallary";
import Nav1 from "./Navbar";
// import Register from "./Register";
// import RegistrationForm from "./RegistrationForm";
import Footer from "./footer";
import Home from "./home";
import Login from "./login";
import Registration from "./Registration";
// import SignUp from "./signUp";
import {Route, Routes } from 'react-router-dom';


const Homeportal = () => {
    return ( 
        <div className="HomePortal">
        <Nav1/>
          <Routes>
            <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Registration/>} />
          {/* <Route path='/singup' element={<signUp/>} /> */}
          <Route path="/gallary" element={<Gallary/>} />
          <Route path="/allevents" element={<Events/>} />
            
        
          </Routes>
          <Footer/>
  </div>
      
     );
}
 
export default Homeportal;