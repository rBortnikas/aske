import React, { useState } from "react";
import Message from "./Message";
import { socketSendMessage } from "../api";

const ChatWindow = props => {
  let [input, setInput] = useState("");

  const handleOnClick = () => {
    if (input) {
      socketSendMessage(input);
      setInput("");
    }
  };

  return (
    <>
      <div pad="xsmall">
        {props.messages.map(msg => (
          <Message msg={msg.messageText} />
        ))}
      </div>

      <textarea
        placeholder="Enter your question"
        value={input}
        onChange={e => setInput(e.target.value)}
        size="medium"
      />

      <button onClick={handleOnClick}>Send message</button>
    </>
  );
};

export default ChatWindow;