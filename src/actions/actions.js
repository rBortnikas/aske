import ActionNames from "./actionNames";

export const updateMessages = messages => ({
  type: ActionNames.UPDATE_MESSAGES,
  payload: messages
});

export const loadMessages = messages => ({
  type: ActionNames.LOAD_MESSAGES,
  payload: messages
});

// export function setSession(session) {
//   console.log("muth fukin sesh: ", session);
//   return {
//     type: ActionNames.SET_SESSION,
//     payload: session
//   };
// }

export const setSession = session => ({
  type: ActionNames.SET_SESSION,
  payload: session
});
