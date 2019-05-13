import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  session: sessionReducer
});

export default rootReducer;
