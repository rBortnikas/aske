import ActionNames from "./actionNames";

export const updateMessages = (messages: string[]) => ({
  type: ActionNames.UPDATE_MESSAGES,
  payload: messages
});

export const loadMessages = (messages: string[]) => ({
  type: ActionNames.LOAD_MESSAGES,
  payload: messages
});

export const setSession = (session: any) => ({
  type: ActionNames.SET_SESSION,
  payload: session
});

export const openModalAction = () => ({
  type: ActionNames.OPEN_MODAL
});

export const closeModalAction = () => ({
  type: ActionNames.CLOSE_MODAL
});

export const setSessionNameErrorAction = () => ({
  type: ActionNames.SET_SESSION_NAME_INPUT_ERROR
});

export const clearSessionNameErrorAction = () => ({
  type: ActionNames.CLEAR_SESSION_NAME_INPUT_ERROR
});