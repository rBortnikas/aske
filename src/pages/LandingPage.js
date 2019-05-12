import React, { useState } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { getSession, subscribeToSocketActions } from "../api";

import * as ROUTES from "../pages/routes";

function LandingPage(props) {
  let [sessionName, setSessionName] = useState("");
  let [error, setError] = useState("");

  function handleOnClick() {
    if (sessionName) {
      let { history } = props;
      getSession(sessionName)
        .then(sessionId => {
          console.log("sesh id: ", sessionId);
          subscribeToSocketActions(sessionId);
          history.push({
            pathname: "/session"
          });
          // add sessionId to redux store, then do a check on /session page
        })
        .catch(error => {
          console.log("Oopsie: ", error);
          setError("No sessions named: " + sessionName);
        });
    }
  }

  return (
    <div>
      <h1>LandingPage</h1>
      <h2>Join session</h2>
      <h3>{error}</h3>
      <input
        value={sessionName}
        onChange={e => setSessionName(e.target.value)}
        placeholder="Enter session ID"
      />
      <button onClick={handleOnClick}>Join</button>

      <h2>Or create session</h2>
      <button>
        <Link to={ROUTES.CREATE_SESSION}>Create</Link>
      </button>
    </div>
  );
}

export default withRouter(LandingPage);
