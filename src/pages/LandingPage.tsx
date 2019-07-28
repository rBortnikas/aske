import React, { useState } from "react";
import { getSession } from "../api";
import {
  setSessionNameErrorAction,
  clearSessionNameErrorAction
} from "../actions/actions";
import styled from "styled-components";
import { routes } from "./routes";
import { Box, Heading, TextInput, Button } from "grommet";
import { RouterProps } from "react-router";

interface ErrorContainerProps {
  height: number;
}

export default function LandingPage({ history }: RouterProps) {
  const [sessionName, setSessionName] = useState("");
  const [error, setError] = useState("");

  function handleOnClick() {
    if (sessionName) {
      getSession(sessionName)
        .then(() => {
          history.push({
            pathname: `${routes.SESSION}/${sessionName}`
          });
          clearSessionNameErrorAction();
        })
        .catch(error => {
          console.log("Oopsie: ", error);
          setSessionNameErrorAction();
          setError("no rooms named " + sessionName);
        });
    }
  }

  function handleSessionNameInput(e: any) {
    const name = e.target.value;
    if (name.length <= 15) {
      setSessionName(name);
    }
  }

  function handleCreateSession() {
    history.push({
      pathname: routes.CREATE_SESSION
    });
  }

  return (
    <Wrapper>
      <Heading level="4" color="#9498FF">
        Q&A app for any event
      </Heading>
      <Heading level="2" color="white">
        Join room
      </Heading>
      <ErrorContainer height={error ? 40 : 0}>
        <Heading level="5" color="#FF6961">
          {error}
        </Heading>
      </ErrorContainer>
      <SessionInput
        focusIndicator={false}
        value={sessionName}
        onChange={handleSessionNameInput}
        placeholder="enter room ID"
        size="large"
      />
      <Box pad="small" />
      <ActionButton
        onClick={handleOnClick}
        label="Join"
        color="#00DD95"
        primary
      />
      <Heading level="2">Or create session</Heading>
      <ActionButton
        label="Create"
        color="#686DFF"
        primary
        focusIndicator={false}
        onClick={handleCreateSession}
      />
    </Wrapper>
  );
}

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

const SessionInput = styled(TextInput)`
  background-color: white;
`;

const ErrorContainer = styled.div`
  height: ${({ height }: ErrorContainerProps) => height}px;
  transition: 0.1s ease-out;
`;

const Wrapper = styled.div`
  text-align: center;
  letter-spacing: 1px;
`;
