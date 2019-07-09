import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage/CreateSessionPage";
import NotFoundPage from "../pages/NotFoundPage";
import { routes } from "../pages/routes";
import { Grommet, Box } from "grommet";
import { theme } from "../theme";
import styled from "styled-components";
import image from "../peopleDancing.jpg";

function App() {
  return (
    <Grommet theme={theme}>
      <BrowserRouter>
        <Box fill flex align="center" jusitfy="center">
          <Header />
          <Switch>
            <Route exact path={routes.LANDING} component={LandingPage} />
            <Route path={routes.CREATE_SESSION} component={CreateSessionPage} />
            <Route path={routes.SPECIFIC_SESSION} component={SessionPage} />
            <Route path={routes.ERROR} component={NotFoundPage} />
          </Switch>
        </Box>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;

const Image = styled.img`
  position: relative;
  bottom: -50px;
  right: 30%;
  width: 160%;
  margin-top: 100px;
  opacity: 0.25;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  bottom: 0px;
  position: fixed;
  z-index: -2;
  width: 411px;
`;
