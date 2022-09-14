import React, { useRef, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq } from "../../api/axiosDefaults";

const ListingCreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type_of_property: "",
    bedrooms: 0,
    area: "",
    price: 0,
    commerce_type: "Sell",
    image_one: "",
  });

  const {
    title,
    description,
    type_of_property,
    bedrooms,
    area,
    price,
    commerce_type,
    image_one,
  } = formData;

  const imageInput = useRef(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      setFormData({
        ...formData,
        image_one: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      console.log(formData);
      await axiosReq.post("/listings/", formData);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
      }
    }
  };

  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={handleChange}
              value={title}
              name="title"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Description"
              onChange={handleChange}
              value={description}
              name="description"
            />
          </Form.Group>
          <Form.Group controlId="type_of_property">
            <Form.Label>Type of Property</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={type_of_property}
              name="type_of_property"
            >
              <option></option>
              <option>Detached House</option>
              <option>Terrace House</option>
              <option>Apartment</option>
              <option>Semi-detached</option>
              <option>Bungalows</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="bedrooms">
            <Form.Label>Number of Bedrooms</Form.Label>
            <Form.Control
              type="number"
              min="1"
              placeholder="Number of Bedrooms"
              onChange={handleChange}
              value={bedrooms}
              name="bedrooms"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="area">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              onChange={handleChange}
              value={area}
              name="area"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              min="1"
              placeholder="Price"
              onChange={handleChange}
              value={price}
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="commerce_type">
            <Form.Label>Selling or Renting</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={commerce_type}
              name="commerce_type"
            >
              <option>Sell</option>
              <option>Rent</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              ref={imageInput}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ListingCreateForm;
