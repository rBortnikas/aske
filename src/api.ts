import openSocket from "socket.io-client";
import { updateMessages, loadMessages } from "./actions/actions";
import { Message } from "./interfaces/store/index";

const env = "https://aske-message-service.herokuapp.com";
// const env = "http://localhost:8888";
let socket: any = undefined;
let currentSessionId: string | undefined = undefined;
function openUniqueSocket(sessionId: string) {
  currentSessionId = sessionId;
  socket = openSocket(`${env}`, {
    upgrade: false,
    transports: ["websocket"],
    query: {
      sessionId
    }
  });
}

export function subscribeToSocketActions(sessionId: string) {
  if (socket) {
    socket.close();
  }
  if (currentSessionId !== sessionId && sessionId !== "error") {
    console.log("opened a socket!!!!", sessionId);
    openUniqueSocket(sessionId);
  }
  socket.on("LOAD_MESSAGES", (messages: Message[]) => {
    loadMessages(messages);
  });

  socket.on("MESSAGE", (messages: Message[]) => {
    updateMessages(messages);
  });
}

export function socketSendMessage(messageText: string, sessionId: string) {
  const author = "Rokas";
  const message = { messageText, author, sessionId };
  socket.emit("MESSAGE", message);
}

export function socketUpvoteMessage(messageId: string, upvoterId: string) {
  const upvoteObject = { messageId, upvoterId };
  socket.emit("UPVOTE", upvoteObject);
}

export function socketDownvoteMessage(messageId: string, upvoterId: string) {
  const upvoteObject = { messageId, upvoterId };
  socket.emit("DOWNVOTE", upvoteObject);
}

export function createSession(sessionName: string, sessionInfoText: string) {
  const url = `${env}/api/createSession?sessionName=${sessionName}&sessionInfoText=${sessionInfoText}`;
  const params = {
    method: "POST"
  };

  return fetch(url, params).catch(error => {
    console.log("createSession Error: ", error);
  });
}

// gets sessionId which is used by sockets
export function getSession(sessionName: string) {
  const url = `${env}/api/getSession?sessionName=${sessionName}`;
  const params = {
    method: "GET"
  };

  return fetch(url, params)
    .then(res => res.text())
    .catch(error => {
      console.log("getSession Error: ", error);
    });
}
