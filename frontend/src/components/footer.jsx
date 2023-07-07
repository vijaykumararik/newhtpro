
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from '@mui/material';
const Footer=()=>{
  return (
    <div className='w-100 ' >
    <MDBFooter  style={{backgroundColor:'purple'}}  className='text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'>
        <div className=' d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='facebook-f' />
          </Link>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='google' />
          </Link>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon color='danger' fab icon='instagram' />
          </Link>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='linkedin' />
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-1'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-1'>
              <h6 className='text-uppercase fw-bold mb-1'>
                <MDBIcon color='secondary' icon='gem' className='me-3 text-light' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-1' >
              <h6 className='text-uppercase fw-bold mb-1'>Products</h6>
                <Link  href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Angular
                </Link><br />
             
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  React
                </Link><br />
              
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Vue
                </Link><br />
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Laravel
                </Link>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-1'>
              <h6 className='text-uppercase fw-bold mb-1'>Useful links</h6>
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Pricing
                </Link><br />
              
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Settings
                </Link><br />
              
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Orders
                </Link><br />
              
                <Link href='#!' style={{textDecoration:'none'}} className='text-reset'>
                  Help
                </Link>
              
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-1'>
              <h6 className='text-uppercase fw-bold mb-1'>Contact</h6>
                <MDBIcon color='light' icon='home' className='me-2' />
                Banglore, Karnataka <br />
                <MDBIcon color='light' icon='envelope' className='me-3' />
                info@example.com <br />
                <MDBIcon color='light' icon='phone' className='me-3' /> + 91- 8884557573 <br />
                <MDBIcon color='light' icon='print' className='me-3' /> + 01 234 567 89
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Teh:
        <Link style={{textDecoration:'none'}} className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          teh.com
        </Link>
      </div> 
    </MDBFooter>
    </div>
  );
}
  export default Footer 