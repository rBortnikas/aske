import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer,
  TextInput
} from "grommet";
import { FormClose, Notification, FormNextLink } from "grommet-icons";

const NameInput = props => {
  let [name, setName] = useState("");

  return (
    <Box
      flex
      width="medium"
      height="medium"
      // background="light-5"
      elevation="small"
      align="center"
      justify="center"
      pad="large"
      round={"small"}
      border="all"
      // fill={"vertical"}
    >
      <Heading margin="none" level={4} margin="medium">
        Enter your name
      </Heading>
      <TextInput
        placeholder="Anonymous"
        value={name}
        onChange={e => setName(e.target.value)}
        size="medium"
      />
      <Heading margin="none" level={4} margin="medium">
        Or go anonymous
      </Heading>
      <Button
        icon={<FormNextLink />}
        // label="go"
        plain={false}
        reverse={true}
        onClick={() => {
          console.log(name);
          props.handleCreateUser(name);
        }}
      />
    </Box>
  );
};

export default NameInput;
