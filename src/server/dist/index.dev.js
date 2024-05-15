"use strict";

process.env.NODE_ENV = "production";

var express = require("express");

var _require = require("node:http"),
    createServer = _require.createServer;

var _require2 = require("socket.io"),
    Server = _require2.Server;

var app = express();
var server = createServer(app);
var io = new Server(server, {
  cors: {
    origin: "*"
  }
});
io.on("connection", function (socket) {
  socket.on("messagefrom", function (senderId, receiverId, messageId) {
    socket.broadcast.emit("".concat(senderId, "=>").concat(receiverId), messageId);
  });
  socket.on("removeMessage", function (senderId, receiverId, messageId) {
    socket.broadcast.emit("".concat(senderId, "Remove").concat(receiverId), messageId);
  });
});
server.listen(3002, function () {
  console.log("server running at http://localhost:3002");
});