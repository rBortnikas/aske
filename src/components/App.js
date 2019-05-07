import React from "react";
import ChatBox from "./ChatBox";
import { socketSendMessage, subscribeToSocketActions } from "../api";
import { connect } from "react-redux";
import { updateMessages } from "../actions/actions";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

class App extends React.Component {
  state = {};

  render() {
    subscribeToSocketActions();
    return (
      <>
        <div>
          <ChatBox
            updateMessages={this.props.updateMessages}
            messages={this.props.messages}
          />
        </div>
      </>
    );
  }
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
)(App);
