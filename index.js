var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  // console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('an user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(data){
    console.log('message: ' + data);
    io.emit('chat message', data);
  });

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
