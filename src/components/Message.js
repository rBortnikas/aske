import React, { useState } from "react";
import { upvoteMessage } from "../api";

const Message = props => {
  const [upvoted, setUpvoted] = useState(false);

  const { sessionId, messageId, author, messageText, upvotes } = props.msg;

  function onClick() {
    setUpvoted(true);
    upvoteMessage(sessionId, messageId, author);
  }

  return (
    <h4>
      {messageText}
      {!upvoted && <span onClick={onClick}> - upvote</span>} - {upvotes}
      {upvoted && <span> 👍</span>}
    </h4>
  );
};

export default Message;
