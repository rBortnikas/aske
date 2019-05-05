import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
// import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools

  return createStore(rootReducer, initialState, composeEnhancers());
}
