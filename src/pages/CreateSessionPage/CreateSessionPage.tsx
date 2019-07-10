import React, { useState } from "react";
import { createSession } from "../../api";
import ActionButton from "../../components/ActionButton";
import SessionCreatedPage from "./SessionCreatedPage";
import styled from "styled-components";
import { TextInput } from "grommet";
import { truncate } from "../../utils/utils"

export default function CreateSessionPage() {
  const [sessionName, setSessionName] = useState("");
  const [sessionInfoText, setSessionInfoText] = useState("");
  const [sessionCreated, setSessionCreated] = useState(false);
  const [sessionCreationError, setSessionCreationError] = useState(false);

  function handleOnClick() {
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

            <InputField
              focusIndicator={false}
              value={sessionName}
              onChange={(e: any) => setSessionName(truncate(e.target.value, 15))}
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

      {!sessionCreated && sessionCreationError && (
        <h4>something went wrong :/</h4>
      )}
    </Container>
  );
}

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
