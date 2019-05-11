import openSocket from "socket.io-client";
import { store } from "./index";

import { updateMessages, loadMessages } from "./actions/actions";

const socket = (testas = "nevermind") =>
  openSocket("http://localhost:8888", {
    upgrade: false,
    transports: ["websocket"],
    query: {
      token: testas
    }
  }); // performance improvement?

export function subscribeToSocketActions(sessionId) {
  console.log("subscirbeds to actions");
  socket().on("LOAD_MESSAGES", messages => {
    store.dispatch(loadMessages(messages));
  });

  socket().on("MESSAGE", message => {
    console.log("we got a msg: ", message);
    store.dispatch(updateMessages(message));
  });
}

export function socketSendMessage(messageText) {
  const author = "Rokas";
  const sessionId = "test123456";
  const message = { messageText, author, sessionId };
  socket().emit("MESSAGE", message);
}

export function socketCreateSession(sessionName) {
  socket().emit("CREATE_SESSION", sessionName);
}
