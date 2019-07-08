import React, { useState } from "react";
import { createSession } from "../../api";
import ActionButton from "../../components/ActionButton";
import styled from "styled-components";
import { TextInput } from "grommet";

function CreateSessionPage() {
  let [sessionName, setSessionName] = useState("");
  let [sessionInfoText, setSessionInfoText] = useState("");
  let [sessionCreated, setSessionCreated] = useState(false);
  let [sessionCreationError, setSessionCreationError] = useState(false);

  function handleOnClick() {
    createSession(sessionName, sessionInfoText).then(res => {
      if (res.status === 200) {
        setSessionCreated(true);
      } else {
        setSessionCreationError(true);
      }
    });
  }

  return (
    <Container>
      {!sessionCreated && (
        <>
          <Title>Create a question room</Title>

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
          <SmallerTitle>People may now join the room by visiting</SmallerTitle>
          <h3>
            <a href={`http://quarrelsome-frog.surge.sh`}>www.aske.ly</a>
          </h3>
          <h4>or directly by</h4>
          <h3>
            <a href={`http://quarrelsome-frog.surge.sh/session/${sessionName}`}>
              www.aske.ly/{sessionName}
            </a>
          </h3>
          <h3>Afraid of forgetting? Send these details to yourself</h3>
          <InputField
            focusIndicator={false}
            value={sessionInfoText}
            onChange={e => {}}
            placeholder="your@email.com"
            size="large"
          />
          <ActionButton
            label="Send"
            color="#686DFF"
            primary
            focusIndicator={false}
            onClick={() => alert("work in progress :)")}
          />
        </>
      )}
      {!sessionCreated && sessionCreationError && (
        <h4>something went wrong :/</h4>
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

const Title = styled.h1`
  margin-top: 40px;
`;

const SmallerTitle = styled.h3`
  margin-top: 40px;
`;
