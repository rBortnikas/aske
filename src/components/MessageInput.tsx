import React, { useState } from "react";
import styled from "styled-components";
import { socketSendMessage } from "../api";
import BottomBar from "./BottomBar";
import ActionButton from "./ActionButton";
import { closeModalAction } from "../actions/actions";
import { truncate } from "../utils/utils";
import TextInputArea from "../components/TextInputs/TextInputArea";

interface Props {
  sessionId: string;
}

export default function MessageInput(props: Props) {
  const [message, setMessage] = useState("");

  function handleOnChange(e: any) {
    const message = truncate(e.target.value, 120);
    setMessage(message);
  }

  function handleAsk() {
    socketSendMessage(message, props.sessionId);
    closeModalAction();
  }

  function handleClose() {
    closeModalAction();
  }

  return (
    <>
      <Wrapper>
        <MessageTextArea
          placeholder="say something"
          value={message}
          onChange={handleOnChange}
          onPressEnter={handleAsk}
        />
      </Wrapper>
      <BottomBar>
        <ActionButton label="Close" color="#FF6F6F" onClick={handleClose} />

        <ActionButton
          label="Ask"
          color="#686DFF"
          onClick={handleAsk}
          disabled={!message}
        />
      </BottomBar>
    </>
  );
}

const Wrapper = styled.div`
  z-index: 40;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1)
  );
  display: flex;
  justify-content: center;
`;

const MessageTextArea = styled(TextInputArea)`
  background-color: white;
  border: 2px solid #08126c;
  margin-bottom: 16px;
  margin-top: 10px;
  width: 80%;
  height: 100px;
  position: fixed;
  bottom: 70px;
`;
