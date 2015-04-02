// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api', require('./routes/api'));

// Get information submited on the form (TODO: create a route)
app.post('/api/people', function(req, res) {
	console.log("Information received | Name: " + req.body.name + " | Address: " + req.body.address + " | Occupation: " + req.body.occupation);
	res.send("Done !");
});

// Start server
app.listen(3000,"http://apreps.github.io/public/");
console.log("API is running on port 3000");
