import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../pages/routes";

function LandingPage() {
  let [sessionName, setSessionName] = useState("");
  return (
    <div>
      <h1>LandingPage</h1>
      <h2>Join session</h2>
      <input
        value={sessionName}
        onChange={e => setSessionName(e.target.value)}
        placeholder="Enter session ID"
      />
      <button>Join</button>

      <h2>Or create session</h2>
      <button>
        <Link to={ROUTES.CREATE_SESSION}>Create</Link>
      </button>
    </div>
  );
}

export default LandingPage;
