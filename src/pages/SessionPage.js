import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateMessages } from "../actions/actions";
import ChatWindow from "../components/ChatWindow";
import * as ROUTES from "../pages/routes";

function SessionPage(props) {
  let [sessionName, setSessionName] = useState("");
  return (
    <div>
      <h1>SessionPage</h1>
      {/* <h2>Join session</h2>
      <input
        value={sessionName}
        onChange={e => setSessionName(e.target.value)}
        placeholder="Enter session ID"
      />
      <button>Join</button>

      <h2>Or create session</h2>
      <button>
        <Link to={ROUTES.CREATE_SESSION}>Create</Link>
      </button> */}
      <h3>To be completed</h3>
      <hr />
      <ChatWindow messages={props.messages} />
    </div>
  );
}

const mapDispatchToProps = {
  updateMessages
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPage);
