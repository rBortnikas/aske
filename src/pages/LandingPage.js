import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import styled from "styled-components";

import image from "C:/Users/Rokas/Desktop/chat_app/chat_app/src/peopleDancing.jpg";
import * as ROUTES from "../pages/routes";
import { Box, ResponsiveContext, Heading, TextInput, Button } from "grommet";

function LandingPage(props) {
  let [sessionName, setSessionName] = useState("");
  let [error, setError] = useState("");

  function handleOnClick() {
    if (sessionName) {
      getSession(sessionName)
        .then(miniSessionObject => {
          miniSessionObject = JSON.parse(miniSessionObject);
          const { sessionId, sessionInfoText } = miniSessionObject;
          console.log("seshijon : ", sessionName, sessionId, sessionInfoText);
          subscribeToSocketActions(sessionId);
          props.setSession({ sessionName, sessionId, sessionInfoText });
          props.history.push({
            pathname: "/session"
          });
        })
        .catch(error => {
          console.log("Oopsie: ", error);
          setError("No sessions named: " + sessionName);
        });
    }
  }

  return (
    <>
      <Raised>
        <Heading level="4" color="#9498FF">
          Q&A app for any event
        </Heading>
        <Heading level="2" color="white">
          Join session
        </Heading>
        <Heading level="3">{error}</Heading>
        <SessionInput
          focusIndicator={false}
          value={sessionName}
          onChange={e => setSessionName(e.target.value)}
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
        >
          {/* <Link to={ROUTES.CREATE_SESSION}>Create</Link> */}
        </ActionButton>
      </Raised>
      <Image src={image} />
    </>
  );
}

const mapDispatchToProps = {
  setSession
};

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);

const Raised = styled.div`
  text-align: center;
  letter-spacing: 1px;
`;

const ActionButton = styled(Button)`
  border: 3px solid white;
  padding: 12px 25px 12px 25px;
  font-size: 25px;
`;

const SessionInput = styled(TextInput)`
  background-color: white;
`;

const PeopleDancing = () => {
  return <img src={image} alt="Logo" />;
};

const Image = styled.img`
  width: 90%;
  margin-top: 100px;
`;
