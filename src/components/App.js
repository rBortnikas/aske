import React from "react";
import ChatBox from "./ChatBox";
import { socketSendMessage, subscribeToSocketActions } from "../api";
import { connect } from "react-redux";
import { updateMessages } from "../actions/actions";

const App = props => {
  subscribeToSocketActions();
  updateMessages("Labas");
  console.log("messages: ", props.messages);
  const { messages } = props;
  return (
    <>
      <div>
        <ChatBox updateMessages={updateMessages} messages={messages} />
      </div>
    </>
  );
};

// const mapDispatchToProps = {
//   updateMessages
// };

const mapDispatchToProps = dispatch => {
  return {
    updatemessages: () => dispatch(updateMessages)
  };
};

const mapStateToProps = state => {
  return {
    messages: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
