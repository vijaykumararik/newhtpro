import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Nav1() {
  return (
    <div className='w-100 ' >
      <Navbar expand="lg" style={{height:'30px'}} className='p-1 fs-6' bg="dark" variant="dar">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link href="#" className="nav-link me-4 fs-5">
              <i className="fab fa-facebook-f text-primary p-0"></i>
            </Nav.Link>
            <Nav.Link href="#" className="nav-link me-4 fs-5">
              <i className="fab fa-instagram text-danger"></i>
            </Nav.Link>
            <Nav.Link href="#" className="nav-link me-4">
              <i className="fas fa-envelope text-info"></i>
            </Nav.Link>
            <Nav.Link href="#" className="nav-link">
              <i className="fas fa-phone text-primary"></i>
              <span className="text-light ms-2">+91-8884557573</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>





    

      <Navbar expand="lg" variant="dar" className='p-0' style={{ backgroundColor: 'purple' }}>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Brand className="pt-0 pb-0 ms-5 ps-5"  href="#home">
          <img height="50px" width="60px" src="https://media.licdn.com/dms/image/C5622AQEquEBZ_rHw2w/feedshare-shrink_2048_1536/0/1666334215565?e=2147483647&v=beta&t=qGrAyDMRVvzIpYolU0oLixCgrCVDATUV2JPJWurefgg" alt="" />
        </Navbar.Brand>
        <Navbar.Collapse className="text-light" id="responsive-navbar-nav"  style={{marginLeft: "470px"}}>
          <Nav className="me-auto  " >
            <Nav.Link className="text-light"  href="/">Home</Nav.Link>
            <Nav.Link className="text-light" href="">Women'sClub</Nav.Link>
            <NavDropdown  title='Event' menuVariant="dark" >
              <NavDropdown.Item  className="fs-xx-small" href="/gallary">GALLERY</NavDropdown.Item>
              <NavDropdown.Item className="fs-xx-small" href="/allevents">ALL EVENTS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-light" variant="dark" href="">Members</Nav.Link>
            <Nav.Link className="text-light" variant="dark" href="">About</Nav.Link>
            <Nav.Link className="text-light" variant="dark" href="/signup">Register</Nav.Link>
            <Nav.Link className="text-light" variant="dark" href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

 

    </div>
  );
}

export default Nav1;
