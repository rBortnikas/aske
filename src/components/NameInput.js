import React, { useState } from "react";

const NameInput = props => {
  let [name, setName] = useState("");

  return (
    <>
      <h1>Enter your name</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h1>Or go anonymous</h1>
      <button onClick={() => props.submitAction(name)}>
        {props.buttonText}
      </button>
      <h1>---------------------</h1>
    </>
  );
};

export default NameInput;
