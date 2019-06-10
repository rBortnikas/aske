import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage";
import * as ROUTES from "../pages/routes";

import { Grommet, Box, ResponsiveContext, Heading } from "grommet";
import { theme } from "../theme";

function App() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Router>
            <BackroundImage />
            <Box fill>
              <Logo level="1" alignSelf="center">
                aske
              </Logo>
              <Box flex direction="row" overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" jusitfy="center">
                  <Route exact path={ROUTES.LANDING} component={LandingPage} />
                  <Route
                    path={ROUTES.CREATE_SESSION}
                    component={CreateSessionPage}
                  />
                  <Route path={ROUTES.SESSION} component={SessionPage} />
                </Box>
              </Box>
            </Box>
          </Router>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

const divStyle = {
  position: "absolute",
  zIndex: -1
};

const BackroundImage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(355);
  // setInterval(() => {
  //   let innerWidth = window.innerWidth;
  //   let innerHeight = 355;
  //   if (innerWidth > 420) {
  //     innerWidth = 250;
  //     innerHeight = 370;
  //   }
  //   setHeight(innerHeight);
  //   setWidth(innerWidth);
  // }, 5000);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 355;
    if (innerWidth > 420) {
      innerWidth = 250;
      innerHeight = 370;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, []);
  return (
    <svg
      width="100%"
      height={height}
      viewBox={"0 0 " + width + " 200"}
      xmlns="http://www.w3.org/2000/svg"
      style={divStyle}
    >
      <rect
        x="-50"
        y="-350"
        width={width + 100}
        height="600"
        // rx={width / 2.74}
        fill="#08126c"
        <animate attributeName="rx" begin="0s" dur="1s" repeatCount="indefinite" from={width / 2.74} to={width / 20}/>
      />
    </svg>
  );
};

const Logo = styled(Heading)`
  color: white;
  font-size: 95px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
`;
