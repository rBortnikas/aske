import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading } from "grommet";
import { StatusUnknown } from "grommet-icons";
import * as ROUTES from "../pages/routes";

const Navigation = () => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="start"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    gap="large"
    height="xsmall"
  >
    <Heading level="1" margin="none">
      asker
    </Heading>
    {/* <Link to={ROUTES.LANDING}>
      <Heading level="3" margin="none">
        asker
      </Heading>
    </Link> */}
  </Box>
);

export default Navigation;
