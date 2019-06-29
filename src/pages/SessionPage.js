import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import styled from "styled-components";
import { Heading } from "grommet";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";
import MessageInput from "../components/MessageInput";

const mapStateToProps = state => {
  return {
    messages: state.messages,
    session: state.session
  };
};

const mapDispatchToProps = {
  setSession
};

function SessionPage(props) {
  const { session, messages, location } = props;
  const pathname = location.pathname;
  const pathnameComponents = pathname.split("/").filter(item => item !== "");
  const [showMessageInput, setShowMessageInput] = useState(false);
  useEffect(() => {
    if (pathnameComponents.length <= 3) {
      const sessionName = pathnameComponents.pop();

      getSession(sessionName)
        .then(miniSessionObject => {
          miniSessionObject = JSON.parse(miniSessionObject);
          const { sessionId, sessionInfoText } = miniSessionObject;
          subscribeToSocketActions(sessionId);
          props.setSession({ sessionName, sessionId, sessionInfoText });
        })
        .catch(error => {
          console.log("Oopsie: ", error);
        });
    }
  }, []);

  return (
    <div>
      <SessionInfoText>
        <Heading level="3">
          {session.sessionInfoText
            ? session.sessionInfoText
            : session.sessionName}
        </Heading>
      </SessionInfoText>
      {session.sessionId && (
        <ChatWindow messages={messages} sessionId={session.sessionId} />
      )}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);

const SessionInfoText = styled.div`
  margin: 0 20px 0 20px;
  text-align: center;
`;
