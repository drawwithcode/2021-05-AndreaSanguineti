var express = require("express");
var app = express();
let port = process.env.PORT || 3000;
var server = app.listen(port);

app.use(express.static("public"));

console.log("My socket server is running" + port);

var socket = require("socket.io");

var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection" + socket.id);

  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit("mouse", data);
    console.log(data);
  }
}
