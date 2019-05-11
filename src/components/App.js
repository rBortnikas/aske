import React from "react";
import MainPage from "./MainPage";
import { subscribeToSocketActions } from "../api";
import { connect } from "react-redux";
import { updateMessages } from "../actions/actions";

class App extends React.Component {
  state = {};
  componentDidMount() {
    subscribeToSocketActions();
  }

  render() {
    return (
      <MainPage
        updateMessages={this.props.updateMessages}
        messages={this.props.messages}
      />
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
