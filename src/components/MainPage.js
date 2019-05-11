import React, { useState } from "react";
import NameInput from "./NameInput";
import ChatWindow from "./ChatWindow";

function MainPage(props) {
  let [userName, setUserName] = useState("");

  const handleCreateUser = name => {
    if (name !== "") {
      setUserName(name);
    } else {
      setUserName("Anonymous");
    }
  };

  return (
    <>
      {!userName && (
        <NameInput submitAction={handleCreateUser} buttonText="go" />
      )}
      {userName}
      <ChatWindow messages={props.messages} />
    </>
  );
}

export default MainPage;
