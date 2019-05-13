import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";

import * as ROUTES from "../pages/routes";

function LandingPage(props) {
  let [sessionName, setSessionName] = useState("");
  let [error, setError] = useState("");

  function handleOnClick() {
    if (sessionName) {
      getSession(sessionName)
        .then(sessionId => {
          console.log("seshijon : ", sessionName, sessionId);
          subscribeToSocketActions(sessionId);
          props.setSession({ sessionName, sessionId });
          props.history.push({
            pathname: "/session"
          });
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

const mapDispatchToProps = {
  setSession
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setSession: () => {
//       dispatch(setSession);
//     }
//   };
// };

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
