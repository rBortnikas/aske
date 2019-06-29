import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import sessionReducer from "./sessionReducer";
import UIReducer from "./UIReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  session: sessionReducer,
  UI: UIReducer
});

export default rootReducer;
