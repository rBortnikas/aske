import React from "react";
import { socketSendMessage, subscribeToSocketActions } from "../api";

const App = () => {
  subscribeToSocketActions();
  return (
    <>
      <div>
        <h1 onClick={() => socketSendMessage("Hello my first msg!")}>
          Click me
        </h1>
      </div>
    </>
  );
};

export default App;
