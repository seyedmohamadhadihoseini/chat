process.env.NODE_ENV = "production";
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
  socket.on("messagefrom", (senderId, receiverId, messageId) => {
    console.log(`message from ${senderId} to ${receiverId} with id = ${messageId}`)
    socket.broadcast.emit(`${senderId}=>${receiverId}`, messageId);
  });
  socket.on("removeMessage",(senderId, receiverId, messageId)=>{
    socket.broadcast.emit(`${senderId}Remove${receiverId}`,messageId);
  })
});

server.listen(3002, () => {
  console.log("server running at http://localhost:3002");
});
