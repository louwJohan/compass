import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import styles from "../../styles/ListingCard.module.css";

const ListingCard = ({ title, price, area, bedrooms, image_one, id }) => {
  return (
    <div className="mx-auto p-3">
      <Card
        style={{ width: "18rem" }}
        className={`mb-5 ${styles.Card} mx-auto`}
      >
        <Card.Img variant="top" src={image_one} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Area: {area}</ListGroup.Item>
          <ListGroup.Item>Bedrooms: {bedrooms}</ListGroup.Item>
          <ListGroup.Item>Price: {price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <NavLink to={`/listing/${id}`}>Listing Details</NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListingCard;
