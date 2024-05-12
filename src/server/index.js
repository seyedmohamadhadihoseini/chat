process.env.NODE_ENV ="production";
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });

  socket.on("new message", (senderId, receiverId) => {
    socket.emit(`${receiverId}new message`, senderId);
  });

  socket.on("messagefrom", (senderId,receiverId,messageId) => {
    socket.broadcast.emit(`${senderId}=>${receiverId}`,messageId);
    // socket.broadcast.emit(`${senderId}=>${receiverId}`,1);
  });
  socket.on("new message2", (receiverId, text) => {
    console.log(text);
    socket.broadcast.emit(`${receiverId}new message2`, text);
  });
});

server.listen(3002, () => {
  console.log("server running at http://localhost:3002");
});
