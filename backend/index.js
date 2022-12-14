var express = require('express');
var app = express();
// const path = require('path')
// var bodyParser = require('body-parser');
var cors = require('cors')
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
});

const sockets = require("./sockets.js")
const server = require("./listen.js")

const PORT = 3000

app.use(cors())

sockets.connect(io,PORT)

server.listen(http,PORT)

// var express = require('express');
// var app = express();
// // const path = require('path')
// // var bodyParser = require('body-parser');
// var cors = require('cors')
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const sockets = require("./sockets.js");
// const server = require("./listen.js");
// const request =  require('request');

// const PORT = 3000;

// app.use(cors());

// sockets.connect(io,PORT);

// server.listen(http,PORT);
