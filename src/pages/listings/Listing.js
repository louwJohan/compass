import React from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import {
  Button,
  Carousel,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import styles from "../../styles/Listing.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import { EditDropdown } from "../../components/EditDropdown";
import CallBack from "./CallBack";
import { useAlert } from "react-alert";

// Renders a listing page with data fro a single listing
const Listing = (props) => {
  const alert = useAlert();
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
    listingPage,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // Function to save a listing for the user
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

  // Function to redirect to listing edit page
  const handleEdit = () => {
    history.push(`/listings/${id}/edit`);
  };

  // Function to delete a listing of a user
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/listings/${id}`);
      alert.show("Your Listing will be deleted");
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to remove a saved listing
  const handleUnSave = async () => {
    try {
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
    <>
      <Row className="g-0">
        <Col lg={6} md={6} sm={12} xs={12}>
          <Carousel variant="dark" className="mt-5">
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_one}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_two}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_three}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_four}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_five}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_six}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_seven}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`d-block w-100 ${styles.ListingImg}`}
                src={image_eight}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="p-4">
          <div>
            <span>{title}</span>
          </div>
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
          <p>Offers in the region of: ??{price}</p>
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
                <i className={`fa fa-solid fa-check ${styles.SaveCheck}`}></i>
              </span>
            ) : currentUser ? (
              <span onClick={handleSave}>
                <i
                  className={`fas fa-regular fa-bookmark ${styles.SaveBookmark}`}
                ></i>
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
          {is_owner && listingPage ? (
            <EditDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          ) : (
            <CallBack />
          )}
        </Col>
      </Row>
      <Container className="mt-3">
        <Button onClick={() => history.goBack()}>Back</Button>
      </Container>
    </>
  );
};

export default Listing;
