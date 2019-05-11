import React, { useState } from "react";

function CreateSessionPage() {
  let [sessionName, setSessionName] = useState("");
  let [sessionCreated, setSessionCreated] = useState(false);

  function handleOnClick() {
    if (!sessionName) {
      setSessionName("funny-random-name");
    }
    setSessionCreated(true);
  }

  return (
    <div>
      <h1>CreateSessionPage</h1>
      {!sessionCreated && (
        <>
          <h2>Create session</h2>
          <input
            value={sessionName}
            onChange={e => setSessionName(e.target.value)}
            placeholder="Enter session name"
          />

          <h3>or get an auto generated one</h3>

          <button onClick={handleOnClick}>create</button>
        </>
      )}
      {sessionCreated && (
        <>
          <h4>Participants may now join the session @</h4>
          <h3>www.somecoolname.com/{sessionName}</h3>
        </>
      )}
    </div>
  );
}

export default CreateSessionPage;
