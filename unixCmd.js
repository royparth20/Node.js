var child_process= require('child_process');
var exec=child_process.exec;
// Simple
exec('ls -la',function(err,stdout,stderr){
  console.log(stdout);
});
// Excute another cmd
exec('node myModule1.js',function(err,stdout,stderr){
  console.log('myModule1.js \n'+stdout);
});

//Excute another with arguments
exec('node parrent.js',{env : {number:123456}},function(err,stdout,stderr){
  console.log('parrent.js \n'+stdout);
  console.log(stderr);
});
