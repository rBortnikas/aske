import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage/CreateSessionPage";
import NotFoundPage from "../pages/NotFoundPage";
import ImageContainer from "../components/ImageContainer";
import { routes } from "../pages/routes";
import { Grommet, Box, ResponsiveContext } from "grommet";
import { theme } from "../theme";
import styled from "styled-components";
import image from "../peopleDancing.jpg";

export default function App() {
  return (
    <Grommet theme={theme}>
      <BrowserRouter>
        <ResponsiveContext.Consumer>
          {screenSize => (
            <>
              <Box fill flex align="center">
                <Header />
                <Switch>
                  <Route exact path={routes.LANDING} component={LandingPage} />
                  <Route
                    path={routes.CREATE_SESSION}
                    component={CreateSessionPage}
                  />
                  <Route
                    path={routes.SPECIFIC_SESSION}
                    component={SessionPage}
                  />
                  <Route path={routes.ERROR} component={NotFoundPage} />
                </Switch>
              </Box>
              <ImageContainer screenSize={screenSize}>
                <Image src={image} />
              </ImageContainer>
            </>
          )}
        </ResponsiveContext.Consumer>
      </BrowserRouter>
    </Grommet>
  );
}

const Image = styled.img`
  position: relative;
  bottom: -50px;
  right: 30%;
  width: 160%;
  margin-top: 100px;
  opacity: 0.25;
`;
