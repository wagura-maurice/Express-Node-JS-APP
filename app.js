var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var host = "127.0.0.1";
var port = 3000;

/*var logger = function(request, response, next) {
	console.log('Logging...');
	next();
}
*/
// app.use(logger);
// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// express js middleware
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(request, response) {
	response.send('Hello');
});

app.listen(port, function() {
	console.log('Server runing on port' + port)
})