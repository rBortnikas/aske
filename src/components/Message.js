import React, { useState } from "react";
import { socketUpvoteMessage } from "../api";
import styled from "styled-components";
import { Box, ResponsiveContext, Text, Icon, Stack } from "grommet";
import { Like } from "grommet-icons";

const Message = props => {
  const [upvoted, setUpvoted] = useState(false);

  const { sessionId, messageId, author, messageText, upvotes } = props.msg;

  function onClick() {
    setUpvoted(true);
    socketUpvoteMessage(messageId, author);
  }

  return (
    <Wrapper>
      <MessageBubble>
        {messageText}
        {!upvoted && <span onClick={onClick}> - upvote</span>} - {upvotes}
        {upvoted && <span> 👍</span>}
      </MessageBubble>
      <UpvoteBubble>
        8<Like color="white" size="small" />
      </UpvoteBubble>
    </Wrapper>
  );
};

export default Message;

const MessageBubble = styled.div`
  border-radius: 15px;
  background-color: #ededff;
  padding: 10px 15px 10px 15px;
`;

const UpvoteBubble = styled.div`
  position: absolute;
  border-radius: 15px;
  padding: 5px;
  background-color: #585863;
  bottom: -16px;
  right: 16px;
  width: 30px;
  z-index: 999;
`;

const Wrapper = styled.div`
  margin: 7px 14px 24px 14px;
  position: relative;
`;
