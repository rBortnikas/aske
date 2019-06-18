import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import styled from "styled-components";

import image from "C:/Users/Rokas/Desktop/chat_app/chat_app/src/peopleDancing.jpg";
import * as ROUTES from "../pages/routes";
import { Box, ResponsiveContext, Heading, TextInput, Button } from "grommet";

function LandingPage(props) {
  const [sessionName, setSessionName] = useState("");
  const [error, setError] = useState("");

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
      pathname: ROUTES.CREATE_SESSION
    });
  }

  return (
    <>
      {/* <BackroundImage error={!!error} /> */}
      {/* <Logo level="1" alignSelf="center">
        aske
      </Logo> */}
      <Raised>
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
        >
          {/* <Link to={ROUTES.CREATE_SESSION}>Create</Link> */}
        </ActionButton>
      </Raised>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
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

const BackroundImage = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    let innerWidth = window.innerWidth;
    let innerHeight = 305;
    if (innerWidth > 420) {
      // innerWidth = 800;
      innerHeight = 370;
    }
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, []);

  useEffect(() => {
    if (props.error) {
      setHeight(345);
    }
  });

  return (
    <ShapeContainer width={width}>
      <Shape width={width} height={height} />
    </ShapeContainer>
  );
};

const Shape = styled.div`
  width: ${props => props.width + 100}px;
  right: 50px;
  background-color: #08126c;
  height: ${props => props.height}px;
  position: relative;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  transition: 0.1s ease-out;
`;

const ShapeContainer = styled.div`
  overflow: hidden;
  width: ${props => props.width}px;
  position: absolute;
  z-index: -1;
`;

const Logo = styled(Heading)`
  color: white;
  font-size: 95px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 5px;
  margin-top: 35px;
`;

const ErrorContainer = styled.div`
  height: ${props => props.height}px;
  transition: 0.1s ease-out;
`;

const Image = styled.img`
  position: relative;
  bottom: -50px;
  right: 30%;
  width: 160%;
  margin-top: 100px;
  opacity: 0.25;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  bottom: 0px;
  position: absolute;
  z-index: -2;
  width: 411px;
`;
