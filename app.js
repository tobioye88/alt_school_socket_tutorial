const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.broadcast.emit("user_connected", "A user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat_message", (data) => {
    console.log("message: ", data);
    // io.emit("chat_message", data);
    socket.broadcast.emit("chat_message", data);
  });

  // socket.broadcast.emit("hi");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
