import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";

const Profile = () => {
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq(`/profiles/${currentUser.profile_id}`);
        setProfileData(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [currentUser]);
  console.log(profileData, "Profile data");
  console.log(currentUser, "Current User");
  return (
    <>
      {hasLoaded ? (
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className="p-4">
            <Card className="mt-5">
              <Card.Img variant="top" src={profileData.image} />
              <Card.Body>
                <Card.Title>{profileData.name}</Card.Title>
                <Card.Text>{profileData.content}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  You have {profileData.listing_count} listings
                </ListGroupItem>
                <ListGroupItem>
                  {profileData.saved_count === 1 ? (
                    <p>You have {profileData.saved_count} saved listing</p>
                  ) : (
                    <p>You have {profileData.saved_count} listings saved</p>
                  )}
                </ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="p-4"></Col>
        </Row>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default Profile;
