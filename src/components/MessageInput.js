import React, { useState } from "react";
import styled from "styled-components";
import { socketSendMessage } from "../api";
import { TextArea } from "grommet";
import BottomBar from "./BottomBar";
import ActionButton from "./ActionButton";

export default function MessageInput(props) {
  const [message, setMessage] = useState("");

  function handleOnChange(e) {
    setMessage(e.target.value);
  }

  function handleAsk() {
    socketSendMessage(message, props.sessionId);
    props.closeModalAction();
  }

  function handleClose() {
    props.closeModalAction();
  }

  return (
    <>
      <Wrapper>
        <MessageTextArea
          placeholder="say something"
          value={message}
          onChange={handleOnChange}
        />
      </Wrapper>
      <BottomBar>
        <ActionButton
          label="Close"
          color="#FF6F6F"
          primary
          focusIndicator={false}
          onClick={handleClose}
        />

        <ActionButton
          label="Ask"
          color={props.modalOpen ? "#00DD95" : "#686DFF"}
          primary
          focusIndicator={false}
          onClick={handleAsk}
        />
      </BottomBar>
    </>
  );
}

const Wrapper = styled.div`
  z-index: 40;
  width: 100%;
  /* height: 300px; */
  height: 100%;
  position: fixed;
  bottom: 0px;
  /* background-color: rgba(255, 255, 255, 0.6); */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  display: flex;
  justify-content: center;
`;

const MessageTextArea = styled(TextArea)`
  background-color: white;
  border: 2px solid #08126c;
  margin-bottom: 16px;
  margin-top: 10px;
  width: 80%;
  height: 100px;
  position: fixed;
  bottom: 70px;
`;
