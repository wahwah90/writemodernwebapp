var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function () {
	console.log('connected to database social');
});
module.exports =mongoose;