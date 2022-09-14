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
    commerce_type: "",
    image_one: "",
    image_two: "",
    image_three: "",
    image_four: "",
    image_five: "",
    image_six: "",
    image_seven: "",
    image_eight: "",
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
    image_two,
    image_three,
    image_four,
    image_five,
    image_six,
    image_seven,
    image_eight,
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
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("type_of_property", type_of_property);
    formData.append("bedrooms", bedrooms);
    formData.append("area", area);
    formData.append("price", price);
    formData.append("commerce_type", commerce_type);
    formData.append("image_one", imageInput.current.files[0]);

    try {
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
            />
          </Form.Group>
          <Form.Group controlId="type_of_property">
            <Form.Label>Type of Property</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={type_of_property}
            >
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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="area">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              onChange={handleChange}
              value={area}
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
            />
          </Form.Group>
          <Form.Group controlId="commerce_type">
            <Form.Label>Selling or Renting</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={commerce_type}
            >
              <option>Sell</option>
              <option>Rent</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
              onChange={handleChangeImage}
              value={image_one}
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              value={image_two}
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
              onChange={handleChangeImage}
              value={image_three}
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              value={image_four}
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
              onChange={handleChangeImage}
              value={image_five}
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              value={image_six}
            />
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
              value={image_seven}
            />
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
              value={image_eight}
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File id="image-upload" accept="image/*" />
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File id="image-upload" accept="image/*" />
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File id="image-upload" accept="image/*" />
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
