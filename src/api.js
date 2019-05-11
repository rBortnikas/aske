import openSocket from "socket.io-client";
import { store } from "./index";

import { updateMessages, loadMessages } from "./actions/actions";

const socket = openSocket("http://localhost:8888");

export const subscribeToSocketActions = () => {
  console.log("subscirbeds to actions");
  socket.on("LOAD_MESSAGES", messages => {
    store.dispatch(loadMessages(messages));
  });

  socket.on("MESSAGE", message => {
    console.log("we got a msg: ", message);
    store.dispatch(updateMessages(message));
  });
};

export const socketSendMessage = messageText => {
  const author = "Rokas";
  const message = { messageText, author };
  socket.emit("MESSAGE", message);
};
