import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import styled from "styled-components";
import { Heading } from "grommet";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import { ReduxState } from "../interfaces/store/index";
import { RouteProps } from "react-router";

type Props = RouteProps & ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: ReduxState) => {
  return {
    messages: state.messages,
    session: state.session
  };
};

function SessionPage(props: Props) {
  const [error, setError] = useState("");
  const { session, messages, location } = props;
  const pathname = location && location.pathname;
  const pathnameComponents =
    pathname && pathname.split("/").filter((item: string) => item !== "");
  useEffect(() => {
    //make these things functions
    if (pathnameComponents && pathnameComponents.length <= 3) {
      const sessionName = pathnameComponents.pop();

      getSession(sessionName)
        .then(miniSessionObject => {
          miniSessionObject = JSON.parse(miniSessionObject as any);
          // @ts-ignore
          const { sessionId, sessionInfoText } = miniSessionObject;
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

export default connect(mapStateToProps)(SessionPage);

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
