import React, { useState, useEffect } from "react";
import MessageBox from "./MessageBox";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import MessageInput from "./MessageInput";
import BottomBar from "./BottomBar";
import { connect } from "react-redux";
import { openModalAction } from "../actions/actions";
import { Heading } from "grommet";
import { ReduxState } from "../interfaces/store/index";
import { Message } from "../interfaces/message/index";

interface OwnProps {
  messages: Message[];
  sessionId: string;
}

type Props = ReturnType<typeof mapStateToProps> & OwnProps;

const mapStateToProps = (state: ReduxState) => {
  return {
    modalOpen: state.UI.modalOpen
  };
};

function ChatWindow(props: Props) {
  const [messages, setMessages] = useState(props.messages || []);

  useEffect(() => {
    setMessages(sortMessages(props.messages));
  }, [props.messages]);

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
        {props.messages.length === 0 && (
          <Heading level="3" margin="xlarge" textAlign="center">
            No questions here yet, be the first one to ask!
          </Heading>
        )}
        {messages.map((msg, idx) => (
          <MessageBox msg={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </>
      {props.modalOpen && <MessageInput sessionId={props.sessionId} />}
      <Space />
      {!props.modalOpen && (
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

export default connect(mapStateToProps)(ChatWindow);

const Space = styled.div`
  height: 60px;
`;
