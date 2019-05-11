import React, { useState } from "react";
import NameInput from "./NameInput";
import ChatWindow from "./ChatWindow";
import { theme } from "../theme";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

import { socketSendMessage } from "../api";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const MainPage = props => {
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [userName, setUserName] = useState("");
  let [showSidebar, setShowSidebar] = useState(false);

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
    <Grommet theme={theme} full>
      <Box direction="row">
        <Box flex align="center" justify="center" pad="medium">
          {!userName && <NameInput handleCreateUser={handleCreateUser} />}
          {userName}
          <ChatWindow messages={props.messages} />
        </Box>
      </Box>
    </Grommet>
  );
};

export default MainPage;
