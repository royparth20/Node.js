var server = require('net').createServer();
var port=100;


server.on('listening',function() {
  console.log('server is listening on port :- '+port);
});

server.on('connection',function(socket) {

  console.log('server has anew connection');

  socket.setEncoding('utf-8');
  socket.write('Hello!\n');
  socket.on('data',function(data) {
    if(data.trim().toLoweCase()=='quit')
    {
      socket.write('bye bye!');
      return socket.end();
    }
    socket.write(data);
  });
  socket.end();
  socket.close();
});
server.on('close',function() {
  console.log('close ');
});
server.on('error',function(err){
  console.log('Error :- '+err);
});
server.listen(port);
