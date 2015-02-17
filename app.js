var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname));

server.listen(8080, function(){
    console.log('Listening at port 8080');
});

io.sockets.on('connection', function (socket) {
    
    var _socket = socket;
    
    console.log('Someone connected');
    
    socket.on('echo', function (data) {
        _socket.emit('echo', data);
    });
 
    socket.on('echo-ack', function (data, callback) {
        callback(data);
    });
});