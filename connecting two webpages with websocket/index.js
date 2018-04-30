var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/input', function(req, res){
  res.sendFile(__dirname + '/input.html');
});

app.get('/output', function(req, res){
  res.sendFile(__dirname + '/output.html');
});

io.on('connection', function(socket){
  
  console.log('user connected');

  socket.on('colour', function(colour){
    io.emit('colour', colour);
    console.log('colour: ' + colour);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});