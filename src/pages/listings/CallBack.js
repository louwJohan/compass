import React, { useState } from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Accordion, Card, Button, Form, Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const CallBack = (props) => {
  const is_owner = props;
  console.log(is_owner);
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    title: "",
    description: "",
  });
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { name, surname, email, phone_number, title, content } = data;
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("listing", id);
    try {
      await axiosReq.post("/messages/", formData);
      history.push("/buy");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const LoggedIn = (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Request a callback or more information
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={handleChange}
                  required
                />
                {errors?.name?.map((message, idx) => (
                  <Alert key={idx} variant="dark">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  name="surname"
                  onChange={handleChange}
                  required
                />
                {errors?.surname?.map((message, idx) => (
                  <Alert key={idx} variant="dark">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  required
                />
                {errors?.email?.map((message, idx) => (
                  <Alert key={idx} variant="dark">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group controlId="phone_number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phone_number"
                  value={phone_number}
                  onChange={handleChange}
                />
                {errors?.phone_number?.map((message, idx) => (
                  <Alert key={idx} variant="dark">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group controlId="title">
                <Form.Label>Re:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Re:"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  required
                />
                {errors?.title?.map((message, idx) => (
                  <Alert key={idx} variant="dark">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as={"textarea"}
                  rows={6}
                  placeholder="Content"
                  name="content"
                  value={content}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {errors?.content?.map((message, idx) => (
                <Alert key={idx} variant="dark">
                  {message}
                </Alert>
              ))}
            </Form>
            <Button type="submit" className="mt-3" onClick={handleSubmit}>
              Submit
            </Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
  const LoggedOut = <p>Sign up or Log in to request a callback</p>;
  return <>{currentUser ? LoggedIn : LoggedOut}</>;
};

export default CallBack;
