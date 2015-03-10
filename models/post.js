var db = require('../db');
var mongoose = require('mongoose');
var Post = db.model('Post', {
	username: {type: String, required: true},
	body: {type: String, required: true},
	date: {type: Date, required: true, default: Date.now }
});

module.exports = Post;