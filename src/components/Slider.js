import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block carousel"
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1662542183/pexels-alex-andrews-833192_hunouf.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Buy</h3>
            <p>Find the perfect house</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel"
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1662541988/pexels-terje-sollie-312029_czqzy4.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Sell</h3>
            <p>Sell your property with Compass</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel"
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1662539258/pexels-pixabay-460695_scl55x.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Rent</h3>
            <p>Rent the place you always dreamed of.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
