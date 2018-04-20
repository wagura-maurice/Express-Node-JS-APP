var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var host = "127.0.0.1";
var port = 3000;

var logger = function(request, response, next) {
	console.log('Loging...');
	next();
}

app.use(logger);

app.get('/', function(request, response) {
	response.send('Hello');
});

app.listen(port, function() {
	console.log('Server runing on port' + port)
})