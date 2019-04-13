var fs = require('fs');
var http = require('http');
var spawn = require('child_process').spawn;
http.createServer(function(req,res)
{
  var child=spawn('tail',['-f','/var/log/system.log']);
  child.stdout.pipe(res);
  res.on('end',function() {
    child.kill();
    console.log('sucessfully!');

  });
  // res.writeHead(200,{'Content-Type':'video/mp4'});
  // var rs=fs.createReadStream('./Video/1.mp4');
  // rs.pipe(res);

}).listen(4000);
