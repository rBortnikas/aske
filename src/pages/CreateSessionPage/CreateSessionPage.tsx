import React, { useState } from "react";
import { createSession } from "../../api";
import ActionButton from "../../components/ActionButton";
import SessionCreatedPage from "./SessionCreatedPage";
import TextInput from '../../components/TextInputs/TextInput';
import styled from "styled-components";
import { truncate } from "../../utils/utils"

export default function CreateSessionPage() {
  const [sessionName, setSessionName] = useState("");
  const [sessionInfoText, setSessionInfoText] = useState("");
  const [sessionCreated, setSessionCreated] = useState(false);
  const [sessionCreationError, setSessionCreationError] = useState(false);

  function handleCreateSession() {
    createSession(sessionName, sessionInfoText).then(res => {
      if (res && res.status === 200) {
        setSessionCreated(true);
      } else {
        setSessionCreationError(true);
      }
    });
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
              onChange={(e: any) => setSessionName(truncate(e.target.value, 15))}
              placeholder="Enter session name"
              onPressEnter={handleCreateSession}
              border
            />
            <Input
              value={sessionInfoText}
              onChange={e => setSessionInfoText(e.target.value)}
              placeholder="An optional header"
              onPressEnter={handleCreateSession}
              border
            />

            <ActionButton
              label="Create"
              color="#686DFF"
              onClick={handleCreateSession}
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
