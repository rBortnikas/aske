import React, { useState, useEffect } from "react";
import Message from "./Message";
import { socketSendMessage } from "../api";

const ChatWindow = props => {
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState(props.messages || []);

  function handleOnClick() {
    if (input) {
      socketSendMessage(input, props.sessionId);
      setInput("");
    }
  }

  function sortMessages(messages) {
    messages.sort((a, b) => b.upvotes - a.upvotes);
    return messages;
  }

  useEffect(() => {
    setMessages(sortMessages(props.messages));
  }, [props.messages]);

  return (
    <>
      <div>
        {props.messages.length === 0 && <h3>Loading messages...</h3>}
        {messages.map((msg, idx) => (
          <Message msg={msg} key={msg.messageId} isTop={idx === 0} />
        ))}
      </div>

      <textarea
        placeholder="Enter your question"
        value={input}
        onChange={e => setInput(e.target.value)}
        size="medium"
      />

      <button onClick={handleOnClick}>Ask a question</button>
    </>
  );
};

export default ChatWindow;
