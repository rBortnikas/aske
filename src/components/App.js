import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage";
import NotFoundPage from "../pages/NotFoundPage";
import { routes } from "../pages/routes";

import { Grommet, Box, ResponsiveContext } from "grommet";
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
