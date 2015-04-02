// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var peopleSchema = new mongoose.Schema({
	name: String,
	address: String,
	occupation: String,
});

// Return model
module.exports = restful.model('People', peopleSchema);