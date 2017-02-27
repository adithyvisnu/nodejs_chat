var express = require("express");
var app = express();
var bodyParser = require('body-parser'); //get post json raw etc

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/getin', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      username:req.body.username,
   };
   res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {
	// body...
	var host = server.address().address
	var port = server.address().port

	console.log("Server runs at : %s:%s",host,port);

})