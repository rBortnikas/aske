const express = require("express");
const cors = require("cors");
// const server = require("http").createServer(app);
const socketIO = require("socket.io");
const uniqid = require("uniqid");
const moment = require("moment");

const PORT = process.env.PORT || 8888;

const app = express();

const server = app.listen(PORT, process.env.IP, () => {
  console.log(`Listening on ${PORT}`);
});

const io = socketIO(server);

app.use(cors());
app.post("/api/createSession/", (req, res) => {
  const sessionName = req.query.sessionName;
  const sessionInfoText = req.query.sessionInfoText;
  const sessionId = "SES_" + uniqid();
  const createdAt = moment().unix();
  const messages = [];
  const session = {
    sessionName,
    sessionInfoText,
    sessionId,
    createdAt,
    messages
  };
  volatileSessionStack.push(session);
  console.log("session created : ", session);
  return res.status(200).send("session created");
});

app.get("/api/getSession/", (req, res) => {
  const sessionName = req.query.sessionName;
  const session = volatileSessionStack.find(session => {
    return session.sessionName === sessionName;
  });
  if (session) {
    const miniSessionObject = {
      sessionId: session.sessionId,
      sessionInfoText: session.sessionInfoText
    };
    return res.send(miniSessionObject); // need better error handling here
  } else {
    return res.status(400).send("error");
  }
});

let volatileSessionStack = [];

io.on("connection", socket => {
  console.log("socketas: ", socket.id);
  const sessionId = socket.handshake.query.sessionId;
  const session = volatileSessionStack.find(session => {
    return session.sessionId === sessionId;
  });
  if (session) {
    socket.emit("LOAD_MESSAGES", session.messages);
  } else {
    console.log("no such session exists: ", sessionId);
  }

  socket.on("MESSAGE", message => {
    message = restructureMessage(message);
    const session = volatileSessionStack.find(session => {
      return session.sessionId === sessionId;
    });
    if (session) {
      session.messages.push(message);
      io.sockets.emit("MESSAGE", message);
    }
  });

  // add a check for same upvoter upvoting same message
  socket.on("UPVOTE", upvoteObject => {
    const { messageId, upvoterId } = upvoteObject;
    const session = volatileSessionStack.find(session => {
      return session.sessionId === sessionId;
    });
    if (session) {
      const message = session.messages.find(message => {
        return message.messageId === messageId;
      });
      if (message) {
        message.upvotes++;
        io.sockets.emit("LOAD_MESSAGES", session.messages);
      }
    }
  });

  socket.on("DOWNVOTE", downvoteObject => {
    const { messageId, upvoterId } = downvoteObject;
    const session = volatileSessionStack.find(session => {
      return session.sessionId === sessionId;
    });
    if (session) {
      const message = session.messages.find(message => {
        return message.messageId === messageId;
      });
      if (message) {
        message.upvotes--;
        io.sockets.emit("LOAD_MESSAGES", session.messages);
      }
    }
  });
});

function restructureMessage(message) {
  const messageId = "MSG_" + uniqid();
  const time = moment().unix();
  const upvotes = 0;
  Object.assign(message, { messageId, time, upvotes });
  return message;
}
