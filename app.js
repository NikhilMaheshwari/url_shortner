var express = require("express");

var app = express();

app.get('/', function (req, res) {
	// route to serve up the homepage
});

app.post('/api/shorten', function (req,res) {
	// route to create and return the shortened url
});

app.get('/:encoded_id', function (req,res) {
	//route to redirect visitor to original url
});

var server = app.listen(3000, function () {
	console.log("Server listening on port 3000");
});
