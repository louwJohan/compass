import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Image, Alert, Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router";
import { useCurrentUser } from "../../context/CurrentUserContext";
import Asset from "../../components/Asset";
import { NavLink } from "react-router-dom";
import styles from "../../styles/EditProfile.module.css";
import { useAlert } from "react-alert";

// Renders the edit profile page
const EditProfile = () => {
  const alert = useAlert();
  const [profileData, setProfileData] = useState({
    profile_name: "",
    profile_content: "",
    profile_image: "",
  });
  const currentUser = useCurrentUser();
  const { profile_name, profile_content, profile_image } = profileData;
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const imageInput = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Function to fetch profile data
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/${currentUser.profile_id}`
        );
        setProfileData(data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
    setHasLoaded(true);
  }, [hasLoaded, currentUser]);

  // Handles change on form
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles image change on form
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      setProfileData({
        ...profileData,
        profile_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Function to submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("profile_name", profile_name);
    formData.append("profile_content", profile_content);

    if (imageInput?.current?.files[0]) {
      formData.append("profile_image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/profiles/${currentUser.profile_id}`, formData);
      alert.show("Your profile will be updated!");
      history.push("/profile");
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      {" "}
      {hasLoaded ? (
        <Row className="row justify-content-center">
          <Col className="col-12 col-lg-6">
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Form.Group className="mt-5">
                <figure>
                  <Image
                    src={profile_image}
                    rounded
                    className={styles.ProfileImg}
                  />
                </figure>
                <Form.File
                  id="profile_image"
                  label="Image"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="profile_image"
                  ref={imageInput}
                />
              </Form.Group>
              {errors?.profile_image?.map((message, idx) => (
                <Alert key={idx} variant="dark">
                  {message}
                </Alert>
              ))}
              <Form.Group className="mb-3" controlId="profile_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={profile_name}
                  name="profile_name"
                />
              </Form.Group>
              {errors?.profile_name?.map((message, idx) => (
                <Alert key={idx} variant="dark">
                  {message}
                </Alert>
              ))}
              <Form.Group className="mb-3" controlId="profile_content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Say something about yourself"
                  onChange={handleChange}
                  value={profile_content}
                  name="profile_content"
                />
              </Form.Group>
              {errors?.profile_content?.map((message, idx) => (
                <Alert key={idx} variant="dark">
                  {message}
                </Alert>
              ))}
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
            <NavLink to="/profile">
              <Button className="mt-3">Back</Button>
            </NavLink>
          </Col>
        </Row>
      ) : (
        <Asset spinner />
      )}
    </div>
  );
};

export default EditProfile;
