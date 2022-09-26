import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

const Messages = (props) => {
  const [messageData, setMessageData] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axiosReq.get("/messages");
        setMessageData(data);
        console.log(messageData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [messageData]);

  return (
    <Container>
      <h1>Call Back</h1>
      <hr></hr>
      <h4>Re:</h4>
      <hr></hr>
      <p>Content:</p>
      <p>
        Name:{} Surname: {}
      </p>
      <p>Tel:</p>
      <p>Email</p>
      <p>Listing:</p>
    </Container>
  );
};

export default Messages;
