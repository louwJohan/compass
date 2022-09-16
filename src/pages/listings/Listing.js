import React from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Carousel, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styles from "../../styles/Listing.module.css";
import { axiosRes } from "../../api/axiosDefaults";

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
    saved_id,
    setListings,
    saved_count,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { listing: id });
      setListings((prevListing) => ({
        ...prevListing,
        results: prevListing.results.map((listing) => {
          return listing.id === id
            ? {
                ...listing,
                saved_count: listing.saved_count + 1,
                saved_id: data.id,
              }
            : listing;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnSave = async () => {
    try {
      console.log(saved_id);
      await axiosRes.delete(`/saved/${saved_id}`);
      setListings((prevListing) => ({
        ...prevListing,
        results: prevListing.results.map((listing) => {
          return listing.id === id
            ? {
                ...listing,
                saved_count: listing.saved_count - 1,
                saved_id: null,
              }
            : listing;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
          <div>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't save your own listing!</Tooltip>}
              >
                <i className={`fas fa-regular fa-bookmark ${styles.Save}`}></i>
              </OverlayTrigger>
            ) : saved_id ? (
              <span onClick={handleUnSave}>
                <i className={`fa fa-solid fa-check ${styles.Save}`}></i>
              </span>
            ) : currentUser ? (
              <span onClick={handleSave}>
                <i className={`fas fa-regular fa-bookmark ${styles.Save}`}></i>
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to save this listing!</Tooltip>}
              >
                <i className={`fas fa-regular fa-bookmark ${styles.Save}`}></i>
              </OverlayTrigger>
            )}
            <p>Saved: {saved_count}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Listing;
