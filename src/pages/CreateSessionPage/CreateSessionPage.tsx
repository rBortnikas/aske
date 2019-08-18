import React, { useState } from "react";
import { createSession } from "../../api";
import ActionButton from "../../components/ActionButton";
import SessionCreatedPage from "./SessionCreatedPage";
import TextInput from '../../components/TextInputs/TextInput';
import styled from "styled-components";
import { checkRoomNameValidity, truncate } from "../../utils/utils"

export default function CreateSessionPage() {
  const [sessionName, setSessionName] = useState("");
  const [sessionInfoText, setSessionInfoText] = useState("");
  const [sessionCreated, setSessionCreated] = useState(false);
  const [sessionCreationError, setSessionCreationError] = useState(false);

  function handleCreateSession() {
    if (sessionName) {
      createSession(sessionName, sessionInfoText).then(res => {
        if (res && res.status === 200) {
          setSessionCreated(true);
        } else {
          setSessionCreationError(true);
        }
      });
    }
  }

  function handleSessionNameChange(e: any) {
    const name = e.target.value;
    if (checkRoomNameValidity(name)) {
      setSessionName(name)
    }
  }

  return (
    <Container>
      {sessionCreated && !sessionCreationError ? (
        <SessionCreatedPage sessionName={sessionName} />
      ) : (
          <>
            <Title>Create a question room</Title>

            <Input
              value={sessionName}
              onChange={handleSessionNameChange}
              placeholder="Enter session name"
              onPressEnter={handleCreateSession}
              border
            />
            <Input
              value={sessionInfoText}
              onChange={e => setSessionInfoText(truncate(e.target.value, 15))}
              placeholder="An optional header"
              onPressEnter={handleCreateSession}
              border
            />

            <ActionButton
              label="Create"
              color="#686DFF"
              onClick={handleCreateSession}
              disabled={!sessionName}
            />
          </>
        )}

      {!sessionCreated && sessionCreationError && (
        <h4>something went wrong :/</h4>
      )}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextInput)`
  margin: 10px 0 16px 0;
`;

const Title = styled.h1`
  margin-top: 40px;
`;
