import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Listing from "./Listing";

const ListingPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: listing }] = await Promise.all([
          axiosReq.get(`/listings/${id}`),
        ]);
        setListing({ results: [listing] });
        console.log(listing);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2">
          <Listing {...listing.results[0]} />
        </Col>
      </Row>
    </div>
  );
};

export default ListingPage;