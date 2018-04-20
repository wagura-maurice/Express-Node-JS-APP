var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var host = "127.0.0.1";
var port = 3000;

// app.get('/', fun)

app.listen(port, function() {
	console.log('Server runing on port' + port)
})