import ActionNames from "../actions/actionNames";

const initialState = { modalOpen: false, sessionNameInputError: false };

const updateUI = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.OPEN_MODAL:
      return { modalOpen: true };
    case ActionNames.CLOSE_MODAL:
      return { modalOpen: false };
    case ActionNames.SET_SESSION_NAME_INPUT_ERROR:
      return { sessionNameInputError: true };
    case ActionNames.CLEAR_SESSION_NAME_INPUT_ERROR:
      return { sessionNameInputError: false };
    default:
      return state;
  }
};

export default updateUI;
