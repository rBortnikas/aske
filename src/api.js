import openSocket from "socket.io-client";
import { store } from "./index";

import { updateMessages, loadMessages } from "./actions/actions";

// const socket = openSocket("http://localhost:8888", {
//   upgrade: false,
//   transports: ["websocket"],
//   query: {
//     token: "testas"
//   }
// }); // performance improvement?
let socket;
let currentSessionId;
function openUniqueSocket(sessionId) {
  currentSessionId = sessionId;
  socket = openSocket("http://localhost:8888", {
    upgrade: false,
    transports: ["websocket"],
    query: {
      sessionId
    }
  });
}

export function subscribeToSocketActions(sessionId) {
  if (socket) {
    socket.close();
  }
  if (currentSessionId !== sessionId && sessionId !== "error") {
    console.log("opened a socket!!!!", sessionId);
    openUniqueSocket(sessionId);
  }
  socket.on("LOAD_MESSAGES", messages => {
    store.dispatch(loadMessages(messages));
  });

  socket.on("MESSAGE", message => {
    console.log("we got a msg: ", message);
    store.dispatch(updateMessages(message));
  });
}

export function socketSendMessage(messageText) {
  const author = "Rokas";
  const sessionId = "test123456";
  const message = { messageText, author, sessionId };
  socket.emit("MESSAGE", message);
}

export function createSession(sessionName) {
  const url =
    "http://localhost:8888/api/createSession?sessionName=" + sessionName;
  const params = {
    method: "POST"
  };

  return (
    fetch(url, params)
      // .then(res => res)
      .catch(error => {
        console.log("createSession Error: ", error);
      })
  );
}

// gets sessionId which is used by sockets
export function getSession(sessionName) {
  const url = "http://localhost:8888/api/getSession?sessionName=" + sessionName;
  const params = {
    method: "GET"
  };

  return fetch(url, params)
    .then(res => res.text())
    .catch(error => {
      console.log("getSession Error: ", error);
    });
}

export const getCurrentlyPlaying = token => {
  const url = "https://api.spotify.com/v1/me/player/currently-playing";

  const params = {
    method: "GET",
    headers: { Authorization: "Bearer " + token }
  };
  return fetch(url, params)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log("Error: ", error);
    });
};
