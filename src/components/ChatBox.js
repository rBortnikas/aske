import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

import { socketSendMessage } from "../api";

const Container = styled.div`
  width: ${props => (props.width ? props.width : "default")};
  display: inline-block;
`;
const ChatBox = props => {
  let [message, setMessage] = useState("Try sendign it");
  let [messages, setMessages] = useState(["feello!"]);

  const handleOnClick = () => {
    if (message !== "") {
      const messageObj = {
        content: message,
        time: "now"
      };
      socketSendMessage(message);
      // document.title = message;
      // setMessages([...messages, message]);
      props.updateMessages(messageObj);
      // setMessage("");
      // console.log(props.messages);
      console.log(props.messages);
    }
  };

  return (
    <>
      <ul>
        {props.messages[0] &&
          props.messages.map(msg => <li key={msg.content}>{msg.content}</li>)}
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
