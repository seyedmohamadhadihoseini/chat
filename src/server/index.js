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
let Sended = {
  isSent: false,
  senderId: 0,
  receiverId: 0,
  messageId: 0
};
let Removed = {
  isRemove: false,
  senderId: 0,
  receiverId: 0,
  messageId: 0
}
app.get("/send", (req, res) => {
  const { senderId, receiverId, messageId } = req.query;
  Sended.senderId = senderId;
  Sended.receiverId = receiverId;
  Sended.messageId = parseInt(messageId);
  Sended.isSent = true;
  return res.json({
    success: true
  })
});
app.get("/remove", (req, res) => {
  const { senderId, receiverId, messageId } = req.query;
  Removed.senderId = senderId;
  Removed.receiverId = receiverId;
  Removed.messageId = parseInt(messageId);
  Removed.isRemove = true;
  return res.json({
    success: true
  })
})
io.on("connection", (socket) => {
  if (Sended.isSent) {
    socket.broadcast.emit(`${Sended.senderId}=>${Sended.receiverId}`, Sended.messageId);
    Sended.isSent = false;
  } else if (Removed.isRemove) {
    socket.broadcast.emit(`${senderId}Remove${receiverId}`, messageId);
    isRemove = false;
  }
})
// io.on("connection", (socket) => {

//   socket.on("messagefrom", (senderId, receiverId, messageId) => {
//     console.log(`message from ${senderId} to ${receiverId} with id = ${messageId}`)
//     socket.broadcast.emit(`${senderId}=>${receiverId}`, messageId);
//   });
//   socket.on("removeMessage", (senderId, receiverId, messageId) => {
//     socket.broadcast.emit(`${senderId}Remove${receiverId}`, messageId);
//   })
// });

server.listen(3002, () => {
  console.log("server running at http://localhost:3002");
});
