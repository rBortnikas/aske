import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

import { socketSendMessage } from "../api";

const Footer = styled.div``;

const Main = styled.div``;

const Chat = styled.div`
  height: 350px;
`;

const ChatBox = props => {
  let [message, setMessage] = useState("");
  // let [messages, setMessages] = useState(["feello!"]);

  const handleOnClick = () => {
    if (message !== "") {
      const messageObj = {
        content: message,
        time: "now",
        author: "Rokas"
      };
      socketSendMessage(messageObj);
      // document.title = message;
      // setMessages([...messages, message]);
      // props.updateMessages(messageObj);
      setMessage("");
      console.log(props);
    }
  };

  return (
    <>
      <Chat>
        <ul>
          {props.messages[0] &&
            props.messages.map(msg => <li key={msg.content}>{msg.content}</li>)}
        </ul>
      </Chat>
      <Footer>
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
      </Footer>
    </>
  );
};

export default ChatBox;
