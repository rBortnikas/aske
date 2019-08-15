import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import styled from "styled-components";
import { Heading } from "grommet";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import { ReduxState, Session } from "../interfaces/store/index";
import { RouteProps } from "react-router";
import { getSessionNameFromLocation } from "../utils/utils";

export default function SessionPage({ location }: RouteProps) {
  const messages = useSelector((state: ReduxState) => state.messages);
  const session = useSelector((state: ReduxState) => state.session);

  const [error, setError] = useState("");

  useEffect(() => {
    const sessionName = location && getSessionNameFromLocation(location);
    if (sessionName) {
      getSession(sessionName)
        .then(JSONsession => {
          const session: Session = JSON.parse(JSONsession as string);
          // @ts-ignore
          const { sessionId, sessionInfoText } = session;
          subscribeToSocketActions(sessionId);
          setSession({ sessionName, sessionId, sessionInfoText });
        })
        .catch(error => {
          console.log("Oopsie: ", error);
          setError(error);
        });
    }
  }, []);

  return (
    <Wrapper>
      {!error ? (
        <>
          <SessionInfoText>
            <SessionHeading>
              {session.sessionInfoText
                ? session.sessionInfoText
                : session.sessionName}
            </SessionHeading>
          </SessionInfoText>
          {session.sessionId && (
            <ChatWindow messages={messages} sessionId={session.sessionId} />
          )}
        </>
      ) : (
          <>
            <Heading level="2" textAlign="center" margin="xlarge">
              No such rooms!
          </Heading>
            <Heading level="5" textAlign="center">
              You might have made a typo
          </Heading>
          </>
        )}
    </Wrapper>
  );
}

const SessionInfoText = styled.div`
  margin: 0 20px 0 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const SessionHeading = styled.h3`
  margin-top: 30px;
`;
