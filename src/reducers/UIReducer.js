import ActionNames from "../actions/actionNames";

const initialState = { modalOpen: false };

const updateUI = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.OPEN_MODAL:
      return { modalOpen: true };
    case ActionNames.CLOSE_MODAL:
      return { modalOpen: false };
    default:
      return state;
  }
};

export default updateUI;
