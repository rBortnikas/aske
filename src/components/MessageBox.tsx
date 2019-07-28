import React, { useState } from "react";
import { socketUpvoteMessage, socketDownvoteMessage } from "../api";
import { Message } from "../interfaces/store/index";
import styled from "styled-components";

interface MessageBoxProps {
  message: Message;
  isTop: boolean;
}

interface UpvoteBubbleProps {
  upvoted: boolean;
}

export default function MessageBox({ message, isTop }: MessageBoxProps) {
  const [upvoted, setUpvoted] = useState(false);

  const { messageId, author, messageText, upvotes } = message;

  function onClick() {
    if (upvoted) {
      setUpvoted(false);
      socketDownvoteMessage(messageId, author);
    } else {
      setUpvoted(true);
      socketUpvoteMessage(messageId, author); // this allows to remove other votes than yours if page is refreshed - bad
    }
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
}

const MessageBubble = styled.div`
  border-radius: 15px;
  background-color: #ededff;
  display: flex;
`;

const UpvoteBubble = styled.div`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 7px;
  background-color: ${({ upvoted }: UpvoteBubbleProps) =>
    upvoted ? "#00DD95" : "#939393"};
  width: 40px;
  z-index: 20;
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
  white-space: normal;
  word-break: break-all;
`;
