import { Dispatch } from "redux";

export interface ReduxState {
  messages: Message[];
  session: Session;
  UI: UIState;
}

export interface Session {
  sessionName: string;
  sessionId: string;
  sessionInfoText?: string;
}

export interface UIState {
  modalOpen: boolean;
  sessionNameInputError: boolean;
}

export interface Message {
  messageText: string;
  author: string;
  sessionId: string;
  messageId: string;
  time: number;
  upvotes: number;
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
