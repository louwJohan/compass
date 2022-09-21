import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router";
import Alert from "react-bootstrap/Alert";

const ListingCreateForm = () => {
  const [listingData, setListingData] = useState({
    title: "",
    description: "",
    type_of_property: "",
    bedrooms: "",
    area: "",
    price: "",
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
  } = listingData;
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleChange = (event) => {
    setListingData({
      ...listingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    setListingData({
      ...listingData,
      [event.target.name]: event.target.files[0],
    });
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
    formData.append("image_one", image_one);
    formData.append("image_two", image_two);
    formData.append("image_three", image_three);
    formData.append("image_four", image_four);
    formData.append("image_five", image_five);
    formData.append("image_six", image_six);
    formData.append("image_seven", image_seven);
    formData.append("image_eight", image_eight);

    try {
      const { data } = await axiosReq.post("/listings/", formData);
      history.push(`/listing/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
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
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
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
          {errors?.description?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          <Form.Group controlId="type_of_property">
            <Form.Label>Type of Property</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={type_of_property}
              name="type_of_property"
            >
              <option></option>
              <option value="detached_house">Detached House</option>
              <option value="terrace_house">Terrace House</option>
              <option value="apartment">Apartment</option>
              <option value="semi_detached">Semi-detached</option>
              <option value="bungalows">Bungalows</option>
            </Form.Control>
          </Form.Group>
          {errors?.type_of_property?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
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
          {errors?.bedrooms?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
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
          {errors?.area?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
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
          {errors?.price?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          <Form.Group controlId="commerce_type">
            <Form.Label>Selling or Renting</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              value={commerce_type}
              name="commerce_type"
            >
              <option></option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </Form.Control>
          </Form.Group>
          {errors?.commerce_type?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_one"
              required
            />
          </Form.Group>
          {errors?.image_one?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_two"
              required
            />
          </Form.Group>
          {errors?.image_two?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_three"
              required
            />
          </Form.Group>
          {errors?.image_three?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_four"
              required
            />
          </Form.Group>
          {errors?.image_four?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_five"
              required
            />
          </Form.Group>
          {errors?.image_five?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_six"
              required
            />
          </Form.Group>
          {errors?.image_six?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_seven"
              required
            />
          </Form.Group>
          {errors?.image_seven?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}
          <Form.Group className="text-center">
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            ></Form.Label>
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              name="image_eight"
              required
            />
          </Form.Group>
          {errors?.image_eight?.map((message, idx) => (
            <Alert key={idx} variant="dark">
              {message}
            </Alert>
          ))}

          <Button variant="primary" type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ListingCreateForm;
