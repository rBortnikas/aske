import ActionNames from "../actions/actionNames";

const initialState = [];

const updateMessages = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.UPDATE_MESSAGES:
      // console.log("UPDATE_MESSAGES: ", action.payload);
      return [...state, action.payload];
    case ActionNames.LOAD_MESSAGES:
      // console.log("LOAD_MESSAGES: ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default updateMessages;
