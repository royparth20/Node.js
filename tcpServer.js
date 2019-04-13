var net=require('net');
var port=4000;
// var host="127.0.0.1";
function connectionListner(conn) {
  console.log('We have new connection!');
}
var conn=net.createConnection(port,connectionListner);
conn.on('error',function(err) {
  console.log(err);
});
conn.write('hello World!');
