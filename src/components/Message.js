import React from "react";

const Message = props => {
  return (
    <h4>
      <em>{props.msg.author}: </em>
      {props.msg.messageText}
    </h4>
  );
};

export default Message;
