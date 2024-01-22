import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  return (
    <Carousel style={{height:"calc(100vh-80px)"}}>
      {data.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={imageUrl} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
