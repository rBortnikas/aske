import openSocket from "socket.io-client";
import { store } from "./index";

import { updateMessages } from "./actions/actions";

const socket = openSocket("http://localhost:8888");

export const subscribeToSocketActions = () => {
  socket.on("MESSAGE", message => {
    console.log("we got a msg: ", message);
    store.dispatch(updateMessages(message));
  });
};

export const socketSendMessage = message => {
  socket.emit("MESSAGE", message);
};
