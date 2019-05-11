import ActionNames from "./actionNames";

export const updateMessages = messages => ({
  type: ActionNames.UPDATE_MESSAGES,
  payload: messages
});

export const loadMessages = messages => ({
  type: ActionNames.LOAD_MESSAGES,
  payload: messages
});
