import React, { useState } from "react";
import { socketUpvoteMessage } from "../api";
import styled from "styled-components";
import { Box, ResponsiveContext, Text, Icon, Stack } from "grommet";
import { Like } from "grommet-icons";

const Message = props => {
  const [upvoted, setUpvoted] = useState(false);

  const {
    sessionId,
    messageId,
    author,
    messageText,
    upvotes,
    isTop
  } = props.msg;

  function onClick() {
    setUpvoted(true);
    socketUpvoteMessage(messageId, author);
  }

  return (
    <Wrapper>
      <MessageBubble>
        <UpvoteBubble onClick={onClick} upvoted={upvoted}>
          <div>{upvotes}</div>
          {isTop && <div>pts</div>}
        </UpvoteBubble>
        <MessageContent>{messageText}</MessageContent>
      </MessageBubble>
    </Wrapper>
  );
};

export default Message;

const MessageBubble = styled.div`
  border-radius: 15px;
  background-color: #ededff;
  display: flex;
`;

const UpvoteBubble = styled.div`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 7px;
  background-color: ${props => (props.upvoted ? "#00DD95" : "#939393")};
  width: 40px;
  z-index: 999;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 7px 14px 24px 14px;
  transition: 1s ease-out;
`;

const MessageContent = styled.div`
  width: 80%;
  padding: 10px 15px 10px 15px;
  display: flex;
  align-items: center;
`;
