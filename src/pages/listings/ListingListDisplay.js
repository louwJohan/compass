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
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await axiosReq.get(
          `/listings/?${filter}&area=${area}&price=${price}&bedrooms=${bedrooms}&type_of_property=${type}`
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
  }, [filter, area, pathname, bedrooms, price, type]);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    try {
      const { data } = await axiosReq.get(
        `/listings/?${filter}&area=${area}&price=${price}&bedrooms=${bedrooms}&type_of_property=${type}&page=${currentPage}`
      );
      setListings(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="text-center mt-3">
      <Col>
        <Form onSubmit={(event) => event.preventDefault()} className="mb-5">
          <Form.Control
            value={area}
            onChange={(event) => setArea(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search Area"
          />
        </Form>
        <Form onSubmit={(event) => event.preventDefault()} className="mb-5">
          <Form.Control
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search price"
          />
        </Form>
        <Form onSubmit={(event) => event.preventDefault()} className="mb-5">
          <Form.Control
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search Number of Bedrooms"
          />
        </Form>
        <Form.Group controlId="type_of_property">
          <Form.Control
            as="select"
            onChange={(event) => setType(event.target.value)}
            value={type}
            name="type_of_property"
            placeholder="Search"
          >
            <option></option>
            <option value="detached_house">Detached House</option>
            <option value="terrace_house">Terrace House</option>
            <option value="apartment">Apartment</option>
            <option value="semi_detached">Semi-detached</option>
            <option value="bungalows">Bungalows</option>
          </Form.Control>
        </Form.Group>
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
        </CardGroup>
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
      </Col>
    </Row>
  );
};

export default ListingListDisplay;
