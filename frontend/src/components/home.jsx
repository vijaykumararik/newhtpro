import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useCallback, useRef ,useEffect,useState} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Sliders from './slider';

const Home = () => {
  const videoRef = useRef(null);
  const [images, setImages] = useState([]);
  const [images1, setImages1] = useState([]);

  const handleMouseEnter = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current.pause();
  }, []);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res1 = await axios.get('http://localhost:4000/advertises');
        console.log(res1.data.slice(0, 3));
        // const res = await axios.get('http://localhost:4000/advertises');
        setImages(res1.data.slice(0, 3)); // Limiting the images to three/
        setImages1(res1.data.slice(3, 6)); // Limiting the images to three
        // console.log(res1.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const convertToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <div className="w-100">
      <div className="row">
        <div className="col-md-9 pe-0">
          <Carousel slide={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height='500px'
                src="images/img1.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height='500px'
                src="images/img2.jpeg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height='500px'
                src="images/img1.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-3  ps-0 mt-md-0 d-flex flex-wrap">
           {/* <Carousel   className='mt-1' style={{ width: '100%' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Carousel data-bs-theme="dark"  className='' style={{ width: '100%' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height='160px'
          width='100%'
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

<Carousel className='mt-0' style={{ width: '100%' }}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            height='160px'
            width='100%'
            src={`data:image/jpeg;base64,${convertToBase64(image.advertise.data)}`}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    <Carousel className='mt-0' style={{ width: '100%' }}>
      {images1.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            height='160px'
            width='100%'
            src={`data:image/jpeg;base64,${convertToBase64(image.advertise.data)}`}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
        
          <Card className="" style={{ width: '100%' }}>
          


  

  
    <MDBContainer>
      <video
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        ref={videoRef}
        src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
        type="video/mp4"
        loop
        className="w-100"
      ></video>
    </MDBContainer>
  
          </Card>
        </div>
      </div>

      <Sliders/>
    </div>
  );
};

export default Home;

