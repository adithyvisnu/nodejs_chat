var express = require("express");
var app = express();

app.get('/', function (req,res) {
	// body...
	res.end("Home Page");
});

var server = app.listen(8080, function () {
	// body...
	var host = server.address().address
	var port = server.address().port

	console.log("Server runs at : %s:%s",host,port);

})