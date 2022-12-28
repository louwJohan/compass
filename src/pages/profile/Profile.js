import React, { useEffect } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { NavLink } from "react-router-dom";
import MessageDetail from "./MessageDetail";

//Renders profile page
const Profile = () => {
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [messageId, setMessageId] = useState();

  useEffect(() => {
    //Function to fetch profile data
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq(`/profiles/${currentUser.profile_id}`);
        setProfileData(data);
        setHasLoaded(true);
        setMessageId(data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [currentUser, hasLoaded]);
  return (
    <>
      {hasLoaded ? (
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className="p-4">
            <Card className={`mt-5`} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profileData.profile_image} />
              <Card.Body>
                <Card.Title>{profileData.profile_name}</Card.Title>
                <Card.Text>{profileData.profile_content}</Card.Text>
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
              </ListGroup>
              <Card.Body>
                <NavLink to={`/mylistings`}>
                  <Button>My Listings</Button>
                </NavLink>
                <NavLink to={"/edit_profile"}>
                  <Button>Edit Profile</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="p-4">
            <h4>Messages</h4>
            {messageId?.length ? (
              <>
                {messageId.map((id) => (
                  <MessageDetail singleId={id} key={id} />
                ))}
              </>
            ) : (
              <p>You have no messages.</p>
            )}
          </Col>
        </Row>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default Profile;
