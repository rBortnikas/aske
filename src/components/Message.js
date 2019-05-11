import React from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
  Layer,
  TextInput,
  Stack,
  Text
} from "grommet";
import {
  FormClose,
  Notification,
  FormNextLink,
  LinkUp,
  Link
} from "grommet-icons";

const Message = props => {
  return (
    <Box direction="row" margin="xsmall">
      <Box pad="small" alignSelf="center" direction="row" flex={{ grow: 1 }}>
        <Text alignSelf="center">28 </Text>
        <LinkUp size="medium" />
      </Box>
      <Box
        background="brand"
        pad={{ horizontal: "medium", vertical: "small" }}
        round
        // width={"medium"}
        // wrap={true}
        // gap="medium"
        // basis="full"
        flex={{ grow: 8 }}
      >
        <Text alignSelf="center">{props.msg}</Text>
      </Box>
    </Box>
  );
};

export default Message;
