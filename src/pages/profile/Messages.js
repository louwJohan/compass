import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { NavLink } from "react-router-dom";

const Messages = () => {
  const currentUser = useCurrentUser();
  const [messageData, setMessageData] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axiosReq.get("/messages");
        setMessageData(data.results);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [hasLoaded]);

  const message_list = [];

  for (let item in messageData) {
    if (messageData[item].listing_owner === currentUser.pk) {
      message_list.push(messageData[item]);
    }
  }

  return (
    <>
      <h4>Messages</h4>
      {hasLoaded ? (
        message_list.length ? (
          message_list.map((message) => (
            <Container key={message.id}>
              <hr></hr>
              <h4>Re:{message.title}</h4>
              <hr></hr>
              <p>Content:{message.content}</p>
              <p>Name:{message.name}</p>
              <p> Surname: {message.surname}</p>
              <p>Tel:{message.phone_number}</p>
              <p>Email: {message.email}</p>
              <NavLink to={`/listing/${message.listing}`}>
                Listing Details
              </NavLink>
            </Container>
          ))
        ) : (
          <p>You have no messages.</p>
        )
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </>
  );
};

export default Messages;
