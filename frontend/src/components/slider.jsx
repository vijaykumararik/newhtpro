import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sliders = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, defaults to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, defaults to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, defaults to 1
    },
  };

  return (
    <div>
        <h3 className="m-2 text-info">Testimonies</h3>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on the server-side
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      transitionDuration={2300}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div><img height='200px' width='200px' src="images/img2.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img 1.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img3.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img 1.jpeg" alt="" /></div>
    
    </Carousel>
    <br />
    <h3 className="m-2 text-info">Premium members</h3>
    <Carousel className="mb-3"
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on the server-side
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={6000}
      keyBoardControl={true}
      transitionDuration={1}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-60-px"
    >
      <div><img height='200px' width='200px' src="images/img2.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img 1.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img3.jpeg" alt="" /></div>
      <div><img height='200px' width='200px' src="images/img 1.jpeg" alt="" /></div>
    
    </Carousel>
    </div>
  );
};

export default Sliders;
