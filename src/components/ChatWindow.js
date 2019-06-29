import React, { useState, useEffect } from "react";
import Message from "./Message";
import { socketSendMessage } from "../api";
import styled from "styled-components";
import { Button } from "grommet";
import MessageInput from "./MessageInput";
import { connect } from "react-redux";
import { openModalAction, closeModalAction } from "../actions/actions";

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
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState(props.messages || []);

  useEffect(() => {
    setMessages(sortMessages(props.messages));
  }, [props.messages]);

  // function handleOnClick() {
  //   if (input) {
  //     socketSendMessage(input, props.sessionId);
  //     setInput("");
  //   }
  // }

  function handleAsk() {
    if (props.modalOpen) {
      props.closeModalAction();
    } else {
      props.openModalAction();
    }
  }

  function handleClose() {
    props.closeModalAction();
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
      {props.modalOpen && <MessageInput closeModalAction={closeModalAction} />}

      {/* <textarea
        placeholder="Enter your question"
        value={input}
        onChange={e => setInput(e.target.value)}
        size="medium"
      /> */}

      {/* <button onClick={handleOnClick}>Ask a question</button> */}
      <BottomBar>
        {props.modalOpen && (
          <ActionButton
            label="Close"
            color="#FF6F6F"
            primary
            focusIndicator={false}
            onClick={handleClose}
          />
        )}
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);

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
  padding: 20px 0 20px 0;
  z-index: 41;
`;

const ActionButton = styled(Button)`
  border: 3px solid white;
  margin: 0 5px 0 5px;
  padding: 12px 25px 12px 25px;
  font-size: 25px;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    box-shadow: none;
  }
  /* transition: 0.1s; */
`;
