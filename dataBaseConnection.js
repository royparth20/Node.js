var mysql=require('mysql');

var con=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "atmdatabase"
});

con.connect(function(err){
	if(err) throw err;
	console.log('Sucessfully!');
	con.query("SELECT * FROM user",function(err,result)
	{
		if(err) throw err;
		console.log(result);
	});
});