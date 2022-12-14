import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/SignInForm.module.css";
import { useHistory } from "react-router";
import Alert from "react-bootstrap/Alert";
import { useSetCurrentUser } from "../../context/CurrentUserContext";
import { useAlert } from "react-alert";
import { setTokenTimestamp } from "../../utils/utils";

// Renders sign in page
const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const alert = useAlert();
  const [errors, setErrors] = useState({});
  const { username, password } = signInData;
  const history = useHistory();

  // Handles change in forms
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to send data when form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", {
        username: username.toLowerCase(),
        password: password,
      });
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      alert.show(`Welcome back ${username}`);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
      console.log(err.response?.data);
    }
  };

  return (
    <div>
      <Row>
        <Col className="col-6 offset-3">
          <h1 className="text-center">Sign In</h1>
          <Form className="text-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                className={styles.Input}
                value={username}
                onChange={handleChange}
                name="username"
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="dark" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className={styles.Input}
                value={password}
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="dark" key={idx}>
                {message}
              </Alert>
            ))}
            <Button variant="dark" type="submit">
              Submit
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="dark" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignInForm;
