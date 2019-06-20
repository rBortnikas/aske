import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage";
import NotFoundPage from "../pages/NotFoundPage";
import { routes } from "../pages/routes";

import { Grommet, Box, ResponsiveContext, Heading } from "grommet";
import { theme } from "../theme";

function App() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <BrowserRouter>
            <Box fill>
              <Navbar />
              <Box flex direction="row" overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" jusitfy="center">
                  <Switch>
                    <Route
                      exact
                      path={routes.LANDING}
                      component={LandingPage}
                    />
                    <Route
                      path={routes.CREATE_SESSION}
                      component={CreateSessionPage}
                    />
                    {/* <Route path={routes.SESSION} component={SessionPage} /> */}
                    <Route
                      path={routes.SPECIFIC_SESSION}
                      component={SessionPage}
                    />
                    <Route path={routes.ERROR} component={NotFoundPage} />
                  </Switch>
                </Box>
              </Box>
            </Box>
          </BrowserRouter>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

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
    let innerHeight = 325;
    if (innerWidth > 420) {
      // innerWidth = 800;
      innerHeight = 370;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, []);
  return (
    <ShapeContainer width={width}>
      <Shape width={width} height={height} />
    </ShapeContainer>
  );
};

const Shape = styled.div`
  width: ${props => props.width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${props => props.height}px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
`;

const ShapeContainer = styled.div`
  overflow: hidden;
  width: ${props => props.width}px;
  position: absolute;
  z-index: -1;
`;

const Logo = styled(Heading)`
  color: white;
  font-size: 95px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
`;
