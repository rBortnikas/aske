import ActionNames from "../actions/actionNames";

const initialState = { sessionName: "", sessionId: "" };

const updateSession = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.SET_SESSION:
      return action.payload;
    default:
      return state;
  }
};

export default updateSession;
