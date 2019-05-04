import React from "react";
import ChatBox from "./ChatBox";
import { socketSendMessage, subscribeToSocketActions } from "../api";

const App = () => {
  subscribeToSocketActions();
  return (
    <>
      <div>
        <ChatBox />
      </div>
    </>
  );
};

export default App;
