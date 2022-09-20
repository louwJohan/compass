import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Slider.module.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            className={`d-block ${styles.carousel}`}
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1663670909/pexels-pixabay-259588_kqdsi6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/buy">
              <div className={styles.caption}>
                <h3>Buy</h3>
                <p>Find the perfect house</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block ${styles.carousel}`}
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1663670909/pexels-pixabay-280229_fwr8gi.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Link to="/sell">
              <div className={styles.caption}>
                <h3>Sell</h3>
                <p>Sell your property with Compass</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block ${styles.carousel}`}
            src="https://res.cloudinary.com/dxwuotiow/image/upload/v1663670909/pexels-binyamin-mellish-1396122_gdiblk.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/rent">
              <div className={styles.caption}>
                <h3>Rent</h3>
                <p>Find the place for you.</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
