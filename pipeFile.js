var fs = require('fs');
var http = require('http');
http.createServer(function(req,res)
{
  res.writeHead(200,{'Content-Type':'video/mp4'});
  var rs=fs.createReadStream('./Video/1.mp4');
  rs.pipe(res);
  console.log('sucessfully!');

}).listen(4000);
