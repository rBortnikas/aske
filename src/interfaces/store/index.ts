import { Dispatch } from "redux";

export interface ReduxState {
  messages: any[];
  session: any;
  UI: any;
}

export let dispatch: Dispatch;
export let getState: () => ReduxState;

export function setGlobalStore(
  storeDispatch: Dispatch,
  storeGetState: () => ReduxState
) {
  dispatch = storeDispatch;
  getState = storeGetState;
}
