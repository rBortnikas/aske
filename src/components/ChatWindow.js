import React, { useState, useEffect } from "react";
import Message from "./Message";
import { socketSendMessage } from "../api";
import styled from "styled-components";
import { Button } from "grommet";

const ChatWindow = props => {
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState(props.messages || []);

  useEffect(() => {
    setMessages(sortMessages(props.messages));
  }, [props.messages]);

  function handleOnClick() {
    if (input) {
      socketSendMessage(input, props.sessionId);
      setInput("");
    }
  }

  function sortMessages(messages) {
    messages.sort((a, b) => b.upvotes - a.upvotes);
    return messages;
  }

  return (
    <>
      <>
        {props.messages.length === 0 && <h3>Loading messages...</h3>}
        {messages.map((msg, idx) => (
          <Message msg={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </>

      <textarea
        placeholder="Enter your question"
        value={input}
        onChange={e => setInput(e.target.value)}
        size="medium"
      />

      <button onClick={handleOnClick}>Ask a question</button>
      <BottomBar>
        <ActionButton
          label="Ask"
          color="#686DFF"
          primary
          focusIndicator={false}
          onClick={() => {}}
        />
      </BottomBar>
    </>
  );
};

export default ChatWindow;

const BottomBar = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: center;
  bottom: 0px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  padding: 20px;
  z-index: 21;
`;

const ActionButton = styled(Button)`
  border: 3px solid white;
  padding: 12px 25px 12px 25px;
  font-size: 25px;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    box-shadow: none;
  }
`;
