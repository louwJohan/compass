import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../context/CurrentUserContext";

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
    if (messageData[item].listing_owner === currentUser.profile_id) {
      message_list.push(messageData[item]);
    }
  }

  return (
    <>
      <h1>Call Back</h1>
      {hasLoaded ? (
        message_list.map((message) => (
          <Container>
            <hr></hr>
            <h4>Re:{message.title}</h4>
            <hr></hr>
            <p>Content:{message.content}</p>
            <p>
              Name:{message.name} Surname: {message.surname}
            </p>
            <p>Tel:{message.phone_number}</p>
            <p>Email: {message.email}</p>
            <p>Listing:</p>
          </Container>
        ))
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </>
  );
};

export default Messages;
