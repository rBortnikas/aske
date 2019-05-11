import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer,
  TextInput,
  TextArea
} from "grommet";
import { FormClose, Notification, FormNextLink } from "grommet-icons";
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
    <Box
      // flex
      width="large"
      // background="light-5"
      elevation="small"
      align="center"
      justify="center"
      pad="large"
      round={"small"}
      border="all"
    >
      <Box pad="xsmall">
        {props.messages.map(msg => (
          <Message msg={msg.messageText} />
        ))}
      </Box>
      <Box direction="row" pad="xsmall" fill="horizontal">
        <Box>
          <TextArea
            placeholder="Enter your question"
            value={input}
            onChange={e => setInput(e.target.value)}
            size="medium"
            resize={false}
          />
        </Box>
        <Box>
          <Button
            icon={<FormNextLink />}
            // label="go"
            plain={false}
            reverse={true}
            onClick={handleOnClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow;
