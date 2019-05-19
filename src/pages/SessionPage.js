import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import * as ROUTES from "../pages/routes";

function SessionPage(props) {
  const { session, messages, history } = props;
  useEffect(() => {
    if (!session.sessionId) {
      history.push({
        pathname: "/"
      });
    }
  });
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

export default connect(mapStateToProps)(SessionPage);
