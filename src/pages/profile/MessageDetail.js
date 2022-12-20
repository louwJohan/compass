import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { NavLink } from "react-router-dom";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";

const MessageDetail = ({ singleId }) => {
  const [messageData, setMessageData] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axiosReq.get(`/messages/${singleId}`);
        setMessageData(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [singleId, hasLoaded]);
  return (
    <>
      {hasLoaded ? (
        <>
          <hr></hr>
          <h4>Re:{messageData.title}</h4>
          <hr></hr>
          <p>Content:{messageData.content}</p>
          <p>Name:{messageData.name}</p>
          <p> Surname: {messageData.surname}</p>
          <p>Tel:{messageData.phone_number}</p>
          <p>Email: {messageData.email}</p>
          <NavLink to={`/listing/${messageData.listing}`}>
            <Button>Listing Details</Button>
          </NavLink>
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </>
  );
};

export default MessageDetail;
