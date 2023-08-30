import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../../../image/h1.png';
import image2 from './../../../image/h2.png';
import image3 from './../../../image/h3.png';
import image4 from './../../../image/h4.png';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          // style={{height: "80%"}}
        />
        <Carousel.Caption>
        <h2>Royal Shell</h2>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          // style={{height: "80%"}}
        />
        <Carousel.Caption>
        <h2>Royal Shell</h2>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          // style={{height: "80%"}}
        />
        <Carousel.Caption>
        <h2>Royal Shell</h2>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Fourth slide"
          // style={{height: "100%"}}
        />
        <Carousel.Caption>
        <h2>Royal Shell</h2>
          {/* <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;