import React, { useState, useEffect } from "react";
import MessageBox from "./MessageBox";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import MessageInput from "./MessageInput";
import BottomBar from "./BottomBar";
import { useSelector } from "react-redux";
import { openModalAction } from "../actions/actions";
import { ReduxState } from "../interfaces/store/index";
import { Message } from "../interfaces/store/index";
import { SadCat } from "../icons/Icons";

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
          <Wrapper>
            <NoMessagesContainer>
              <SadCat />
              <h3>No questions here yet, be the first one to ask!</h3>
            </NoMessagesContainer>
          </Wrapper>
        )}
        {messageOrder.map((msg, idx) => (
          <MessageBox message={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </>
      {modalOpen && <MessageInput sessionId={sessionId} />}
      {!modalOpen && (
        <BottomBar>
          <ActionButton
            label="Ask"
            color="#686DFF"
            onClick={handleAsk}
          />
        </BottomBar>
      )}
    </>
  );
}

const NoMessagesContainer = styled.div`
  text-align: center;
  padding: 15px 30px;
  border-radius: 13px;
  background-color: #EDEDFF;
  margin: 20% 25px 0 25px;
  max-width: 400px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
