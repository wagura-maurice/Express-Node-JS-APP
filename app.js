var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var expressValidator = require('express-validator')

var app = express();

var host = "127.0.0.1";
var port = 3000;

/*var logger = function(request, response, next) {
	console.log('Logging...');
	next();
}
*/
// app.use(logger);

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// express js middleware
// app.use(express.static(path.join(__dirname, 'public')));

var fs = require('fs');
var file = __dirname + '/data.json';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  countries = JSON.parse(data);

  // console.dir(data);
});

app.get('/', function(request, response) {
	// response.send('Hello');
	// response.json(countries);
	response.render('home', {
		title: "Countries API",
		data: countries
	});
});

app.listen(port, function() {
	// console.log('Server runing on port' + port)
});