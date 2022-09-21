import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import appStyles from "../../App.module.css";
import { Form } from "react-bootstrap";
import ListingCard from "./ListingCard";

const ListingListDisplay = ({ message, filter = "" }) => {
  const [listings, setListings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await axiosReq.get(
          `/listings/?${filter}&search=${query}`
        );
        setListings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchListings();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);
  return (
    <div>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2">
          <p>Popular profiles mobile</p>
          <i className={`fas fa-search`} />
          <Form onSubmit={(event) => event.preventDefault()} className="mb-5">
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search listings"
            />
          </Form>

          {hasLoaded ? (
            <>
              {listings.results.length ? (
                listings.results.map((listing) => (
                  <ListingCard key={listing.id} {...listing} />
                ))
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ListingListDisplay;
