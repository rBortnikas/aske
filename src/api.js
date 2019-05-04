import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8888");

export const subscribeToSocketActions = () => {
  socket.on("MESSAGE", message => {
    console.log("we got a msg: ", message);
    return message;
  });
};

export const socketSendMessage = message => {
  socket.emit("MESSAGE", message);
};
