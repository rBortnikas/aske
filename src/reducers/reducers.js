import ActionNames from "../actions/actionNames";

const initialState = {};

export const updateMessages = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.UPDATE_MESSAGES:
      console.log("action payload: ", action.payload);
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
