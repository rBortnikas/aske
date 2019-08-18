import React, { useState } from "react";
import { getSession } from "../api";
import {
  setSessionNameErrorAction,
  clearSessionNameErrorAction
} from "../actions/actions";
import ActionButton from '../components/ActionButton';
import styled from "styled-components";
import { routes } from "./routes";
import { Box, Heading } from "grommet";
import { RouterProps } from "react-router";
import TextInput from '../components/TextInputs/TextInput';

interface ErrorContainerProps {
  height: number;
}

export default function LandingPage({ history }: RouterProps) {
  const [sessionName, setSessionName] = useState("");
  const [error, setError] = useState("");

  function handleJoin() {
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
      <TextInput
        value={sessionName}
        onChange={handleSessionNameInput}
        placeholder="enter room ID"
        onPressEnter={handleJoin}
      />
      <Box pad="small" />
      <ActionButton
        onClick={handleJoin}
        label="Join"
        color="#00DD95"
      />
      <Heading level="2">Or create room</Heading>
      <ActionButton
        label="Create"
        color="#686DFF"
        onClick={handleCreateSession}
      />
    </Wrapper>
  );
}

const ErrorContainer = styled.div`
  height: ${({ height }: ErrorContainerProps) => height}px;
  transition: 0.1s ease-out;
`;

const Wrapper = styled.div`
  text-align: center;
  letter-spacing: 1px;
`;
