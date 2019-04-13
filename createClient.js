var client= require('net').createServer();
var port=100;
var host='127.0.0.1';

client.on('listening',function() {
  console.log('client is listening on port :- '+port);
});

client.on('connection',function(socket) {

  console.log('client has anew connection');

});
client.on('close',function() {
  console.log('close ');
});
client.on('error',function(err){
  console.log('Error :- '+err);
});
client.listen(port,host);
// console.log('close ');
