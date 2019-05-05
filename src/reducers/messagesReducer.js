import ActionNames from "../actions/actionNames";

const initialState = [];

const updateMessages = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionNames.UPDATE_MESSAGES:
      console.log("action payload: ", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

// const updateMessages = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ActionNames.UPDATE_MESSAGES:
//       console.log("action payload: ", action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default updateMessages;
