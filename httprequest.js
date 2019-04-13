require('http');
var req=http.request(options,function(response){
	response.on("data",function(data){
		console.log(data);
	});
	response.on("end",function(data){
		console.log("hi",data);
	});
});
req.end();