var express		= require('express');
var http 		= require('http');
var bodyParser 	= require('body-parser');
var app			= express();

app.use(bodyParser.json());
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(3001,function () {
	console.log('listening to port ', 3001);
});