import React from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Carousel, Col, Row } from "react-bootstrap";

const Listing = (props) => {
  const {
    id,
    owner,
    title,
    description,
    type_of_property,
    bedrooms,
    area,
    price,
    image_one,
    image_two,
    image_three,
    image_four,
    image_five,
    image_six,
    image_seven,
    image_eight,
    updated_at,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <>
      <Row>
        <Col>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_one}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_two}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_three}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_four}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_five}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_six}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_seven}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_eight}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h3>{title}</h3>
          <hr></hr>
          <p>{description}</p>
          <hr></hr>
          <p>Bedrooms: {bedrooms}</p>
          <hr></hr>
          <p>
            Type of Property:{" "}
            {type_of_property === "detached_house"
              ? "Detached House"
              : type_of_property === "terrace_house"
              ? "Terrance House"
              : type_of_property === "apartment"
              ? "Apartment"
              : type_of_property === "semi_detached"
              ? "Semi-detached"
              : "Bungalows"}
          </p>
          <hr></hr>
          <p>Area: {area}</p>
          <hr></hr>
          <p>Price: £{price}</p>
          <hr></hr>
          <p>{updated_at}</p>
          <hr></hr>
        </Col>
      </Row>
    </>
  );
};

export default Listing;
