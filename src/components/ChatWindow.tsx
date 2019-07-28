import React, { useState, useEffect } from "react";
import MessageBox from "./MessageBox";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import MessageInput from "./MessageInput";
import BottomBar from "./BottomBar";
import { useSelector } from "react-redux";
import { openModalAction } from "../actions/actions";
import { Heading } from "grommet";
import { ReduxState } from "../interfaces/store/index";
import { Message } from "../interfaces/message/index";

interface Props {
  messages: Message[];
  sessionId: string;
}

export default function ChatWindow({ messages, sessionId }: Props) {
  const [messageOrder, setMessageOrder] = useState(
    sortMessages(messages) || []
  );
  const modalOpen = useSelector((state: ReduxState) => state.UI.modalOpen);

  useEffect(() => {
    setMessageOrder(sortMessages(messages));
  }, [messages]);

  function handleAsk() {
    openModalAction();
  }

  function sortMessages(messages: Message[]) {
    messages.sort((a, b) => b.upvotes - a.upvotes);
    return messages;
  }

  return (
    <>
      <>
        {messages.length === 0 && (
          <Container>
            <Heading level="3" margin="xlarge">
              No questions here yet, be the first one to ask!
            </Heading>
          </Container>
        )}
        {messageOrder.map((msg, idx) => (
          <MessageBox msg={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </>
      {modalOpen && <MessageInput sessionId={sessionId} />}
      <Space />
      {!modalOpen && (
        <BottomBar>
          <ActionButton
            label="Ask"
            color="#686DFF"
            primary
            focusIndicator={false}
            onClick={handleAsk}
          />
        </BottomBar>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Space = styled.div`
  height: 60px;
`;
