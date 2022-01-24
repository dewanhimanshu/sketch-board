const express = require("express"); // Access
const socket = require("socket.io");

const app = express(); //Initialized and server ready

app.use(express.static("public"));

let port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})

let io = socket(server);


io.on("connection", (socket) => {
    console.log("Made socket connection");
    // Received data
   

    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected computers
        socket.broadcast.emit("beginPath", data);
         
    })
    socket.on("drawStroke", (data) => {
        socket.broadcast.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        socket.broadcast.emit("redoUndo", data);
    })
    socket.on("clearCanvas", (data) => {
        socket.broadcast.emit("clearCanvas", data);
    })
})