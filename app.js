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

app.get('/', function(request, response) {
	// get data from data.json file
	var fs = require('fs');
	var file = __dirname + '/data.json';

	fs.readFile(file, 'utf8', function (error, data) {
		if (error) {
			console.log('Error: ' + error);
			return;
		}
		response.render('region', {
			title: "World Region",
			data: JSON.parse(data)
		});
	});	
});

app.get('/region/:id', function(request, response) {

	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			response.render('region/countries', {
				title: "Countries In " + request.params.id,
				data: JSON.parse(this.responseText)
			});
		}
	};

	xhr.open("GET", "https://restcountries.eu/rest/v2/region/" + request.params.id);
	xhr.send();

});

app.get('/country/:id', function(request, response) {

	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			response.render('country', {
				title: request.params.id,
				data: JSON.parse(this.responseText)
			});
		}
	};

	xhr.open("GET", "https://restcountries.eu/rest/v2/name/" + request.params.id + "?fullText=true");
	xhr.send();

});

app.listen(port, function() {
	// console.log('Server runing on port' + port)
});