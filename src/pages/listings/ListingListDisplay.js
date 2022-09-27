import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import appStyles from "../../App.module.css";
import Form from "react-bootstrap/Form";
import ListingCard from "./ListingCard";
import { CardGroup } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const ListingListDisplay = ({ message, filter = "" }) => {
  const [listings, setListings] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await axiosReq.get(
          `/listings/?${filter}&search=${query}`
        );
        setListings(data);
        setpageCount(Math.ceil(data.count / 10));
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

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    try {
      const { data } = await axiosReq.get(
        `/listings/?${filter}&search=${query}&page=${currentPage}`
      );
      setListings(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="text-center">
      <Col>
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
        <CardGroup>
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
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </CardGroup>
      </Col>
    </Row>
  );
};

export default ListingListDisplay;
