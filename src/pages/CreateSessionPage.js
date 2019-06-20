import React, { useState } from "react";
import { createSession } from "../api";
import styled from "styled-components";
import { Box, Button, Heading, TextInput } from "grommet";

function CreateSessionPage() {
  let [sessionName, setSessionName] = useState("");
  let [sessionInfoText, setSessionInfoText] = useState("");
  let [sessionCreated, setSessionCreated] = useState(false);

  function handleOnClick() {
    if (!sessionName) {
      setSessionName("funny-random-name");
      createSession(sessionName, sessionInfoText);
    }
    setSessionCreated(true);
    createSession(sessionName, sessionInfoText);
  }

  return (
    <Container>
      {!sessionCreated && (
        <>
          <Heading level="2" alignSelf="center">
            Create Session
          </Heading>
          {/* <input
            value={sessionName}
            onChange={e => setSessionName(e.target.value)}
            placeholder="Enter session name"
          /> */}

          <InputField
            focusIndicator={false}
            value={sessionName}
            onChange={e => setSessionName(e.target.value)}
            placeholder="Enter session name"
            size="large"
          />

          <InputField
            focusIndicator={false}
            value={sessionInfoText}
            onChange={e => setSessionInfoText(e.target.value)}
            placeholder="An optional header"
            size="large"
          />

          <Heading level="3">or get an auto generated one</Heading>

          <ActionButton
            label="Create"
            color="#686DFF"
            primary
            focusIndicator={false}
            onClick={handleOnClick}
          />
        </>
      )}
      {sessionCreated && (
        <>
          <h4>Participants may now join the session @</h4>
          <h3>www.somecoolname.com/{sessionName}</h3>
        </>
      )}
    </Container>
  );
}

export default CreateSessionPage;

const Container = styled.div`
  text-align: center;
`;

const InputField = styled(TextInput)`
  background-color: white;
  border: 2px solid #08126c;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const ActionButton = styled(Button)`
  border: 3px solid white;
  padding: 12px 25px 12px 25px;
  font-size: 25px;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    box-shadow: none;
  }
`;
