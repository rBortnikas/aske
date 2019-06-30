import React, { useState, useEffect } from "react";
import Message from "./Message";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import MessageInput from "./MessageInput";
import BottomBar from "./BottomBar";
import { connect } from "react-redux";
import { openModalAction, closeModalAction } from "../actions/actions";
import { Heading } from "grommet";

const mapDispatchToProps = {
  openModalAction,
  closeModalAction
};

const mapStateToProps = state => {
  return {
    modalOpen: state.UI.modalOpen
  };
};

const ChatWindow = props => {
  let [messages, setMessages] = useState(props.messages || []);

  useEffect(() => {
    setMessages(sortMessages(props.messages));
  }, [props.messages]);

  function handleAsk() {
    props.openModalAction();
  }

  function sortMessages(messages) {
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
          <Message msg={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </>
      {props.modalOpen && (
        <MessageInput
          closeModalAction={props.closeModalAction}
          sessionId={props.sessionId}
        />
      )}
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);

const Space = styled.div`
  height: 60px;
`;
