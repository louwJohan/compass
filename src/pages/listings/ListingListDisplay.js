import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import Listing from "./Listing";
import appStyles from "../../App.module.css";

const ListingListDisplay = ({ message, filter = "" }) => {
  const [listings, setListings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await axiosReq.get(`/listings/?${filter}`);
        setListings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchListings();
  }, [filter, pathname]);
  return (
    <div>
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <p>Popular profiles mobile</p>
          {hasLoaded ? (
            <>
              {listings.results.length ? (
                listings.results.map((listing) => (
                  <Listing
                    key={listing.id}
                    {...listing}
                    setListings={setListings}
                  />
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
