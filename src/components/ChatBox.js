import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

import { socketSendMessage } from "../api";

const Container = styled.div`
  width: ${props => (props.width ? props.width : "default")};
  display: inline-block;
`;
const ChatBox = () => {
  let [message, setMessage] = useState("Try sendign it");
  let [messages, setMessages] = useState(["feello!"]);

  const handleOnClick = () => {
    if (message !== "") {
      socketSendMessage(message);
      document.title = message;
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <>
      <ul>
        {messages.map(msg => (
          <li>{msg}</li>
        ))}
      </ul>
      <Container width="70%">
        <TextField
          id="outlined-bare"
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rowsMax={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Container>
      <Container width="30%">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          type="submit"
          onClick={handleOnClick}
        >
          send
        </Button>
      </Container>
    </>
  );
};

export default ChatBox;
