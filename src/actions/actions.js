import ActionNames from "./actionNames";

export const updateMessages = messages => ({
  type: ActionNames.UPDATE_MESSAGES,
  payload: messages
});
