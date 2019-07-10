import ActionNames from "./actionNames";
import { dispatch } from "../interfaces/store";
import { Message } from "../interfaces/message/index";

export const updateMessages = (payload: Message[]) =>
  dispatch({
    type: ActionNames.UPDATE_MESSAGES,
    payload
  });

export const loadMessages = (payload: Message[]) =>
  dispatch({
    type: ActionNames.LOAD_MESSAGES,
    payload
  });

export const setSession = (
  payload: any // set proper types
) =>
  dispatch({
    type: ActionNames.SET_SESSION,
    payload
  });

export const openModalAction = () =>
  dispatch({
    type: ActionNames.OPEN_MODAL
  });

export const closeModalAction = () =>
  dispatch({
    type: ActionNames.CLOSE_MODAL
  });

export const setSessionNameErrorAction = () =>
  dispatch({
    type: ActionNames.SET_SESSION_NAME_INPUT_ERROR
  });

export const clearSessionNameErrorAction = () =>
  dispatch({
    type: ActionNames.CLEAR_SESSION_NAME_INPUT_ERROR
  });
