import React, { useState } from "react";
import { createSession } from "../api";
import ActionButton from "../components/ActionButton";
import styled from "styled-components";
import { Heading, TextInput } from "grommet";

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
            Create a question room
          </Heading>

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
          <h4>People may now join the room by visiting</h4>
          <h3>
            <a href={`http://quarrelsome-frog.surge.sh`}>www.aske.ly</a>
          </h3>
          <h4>or directly by</h4>
          <h3>
            <a href={`http://quarrelsome-frog.surge.sh/session/${sessionName}`}>
              www.aske.ly/{sessionName}
            </a>
          </h3>
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
