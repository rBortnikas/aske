import React, { useEffect } from "react";
// import MainPage from "./MainPage";
import Navbar from "./Navbar";
// import { subscribeToSocketActions } from "../api";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { updateMessages } from "../actions/actions";
import LandingPage from "../pages/LandingPage";
import SessionPage from "../pages/SessionPage";
import CreateSessionPage from "../pages/CreateSessionPage";
import * as ROUTES from "../pages/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.CREATE_SESSION} component={CreateSessionPage} />
      <Route path={ROUTES.SESSION} component={SessionPage} />
    </Router>
  );
}

export default App;
