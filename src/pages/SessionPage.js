import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import { getSession, subscribeToSocketActions } from "../api";
import { setSession } from "../actions/actions";

function SessionPage(props) {
  const { session, messages, location } = props;
  const pathname = location.pathname;
  console.log(pathname.split("/").pop());
  const pathnameComponents = pathname.split("/").filter(item => item !== "");
  useEffect(() => {
    if (pathnameComponents.length <= 3) {
      const sessionName = pathnameComponents.pop();

      getSession(sessionName)
        .then(miniSessionObject => {
          miniSessionObject = JSON.parse(miniSessionObject);
          const { sessionId, sessionInfoText } = miniSessionObject;
          console.log("seshijon : ", sessionName, sessionId, sessionInfoText);
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
      <h4>SessionPage</h4>
      <h2>{session.sessionInfoText}</h2>
      <hr />
      {session.sessionId && (
        <ChatWindow messages={messages} sessionId={session.sessionId} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    session: state.session
  };
};

const mapDispatchToProps = {
  setSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);
