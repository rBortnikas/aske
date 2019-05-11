import React, { useState } from "react";
import NameInput from "./NameInput";
import ChatWindow from "./ChatWindow";
import { Box } from "grommet";

import { socketSendMessage } from "../api";

const MainPage = props => {
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [userName, setUserName] = useState("");

  const handleCreateUser = name => {
    if (name !== "") {
      setUserName(name);
    } else {
      setUserName("Anonymous");
    }
  };

  const handleOnClick = () => {
    if (message !== "") {
      const messageObj = {
        content: message,
        time: "now",
        author: userName
      };
      socketSendMessage(messageObj);
      setMessage("");
    }
  };

  return (
    <>
      {!userName && <NameInput handleCreateUser={handleCreateUser} />}
      {userName}
      <ChatWindow messages={props.messages} />
    </>
  );
};

export default MainPage;
