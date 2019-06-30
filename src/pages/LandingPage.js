import React, { useState } from "react";
import { connect } from "react-redux";
import { getSession } from "../api";
import {
  setSession,
  setSessionNameErrorAction,
  clearSessionNameErrorAction
} from "../actions/actions";
import styled from "styled-components";
import { routes } from "../pages/routes";
import { Box, Heading, TextInput, Button } from "grommet";

const mapDispatchToProps = {
  setSession,
  setSessionNameErrorAction,
  clearSessionNameErrorAction
};

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);

const Wrapper = styled.div`
  text-align: center;
  letter-spacing: 1px;
`;

function LandingPage(props) {
  const [sessionName, setSessionName] = useState("");
  const [error, setError] = useState("");

  function handleOnClick() {
    if (sessionName) {
      getSession(sessionName)
        .then(miniSessionObject => {
          miniSessionObject = JSON.parse(miniSessionObject);
          props.history.push({
            pathname: `${routes.SESSION}/${sessionName}`
          });
          props.clearSessionNameErrorAction();
        })
        .catch(error => {
          console.log("Oopsie: ", error);
          props.setSessionNameErrorAction();
          setError("no sessions named " + sessionName);
        });
    }
  }

  function handleSessionNameInput(e) {
    const name = e.target.value;
    if (name.length <= 15) {
      setSessionName(name);
    }
  }

  function handleCreateSession() {
    props.history.push({
      pathname: routes.CREATE_SESSION
    });
  }

  return (
    <Wrapper>
      <Heading level="4" color="#9498FF">
        Q&A app for any event
      </Heading>
      <Heading level="2" color="white">
        Join session
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
        placeholder="enter session ID"
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
  height: ${props => props.height}px;
  transition: 0.1s ease-out;
`;
