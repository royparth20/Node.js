var fs=require('fs');
fs.stat('/',function(err,stats){
  if (err) {
    // throw err;
  }
  console.log(stats);
});
fs.open('./fileDemo.txt','a',function opened(err,fd){
  //if(err){ throw err;}
  console.log("file is opend!");
  var readBuffer=new Buffer("parth roy"),
  bufferOffset=0,
  bufferLength =readBuffer.length,
  filePosition=null;
  fs.write(fd,
    readBuffer,
    bufferOffset,
    bufferLength,
    filePosition,
    function wrote(err,readBytes){
      if(err){ throw err;}
      console.log('just read'+readBytes);
    });
});
