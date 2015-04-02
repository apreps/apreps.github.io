// Dependencies
var express = require('express');
var router = express.Router();

// Models
var People = require('../models/people');

// Routes
/*router.get('/people', function(req, res){
	res.send('api is working');
})*/

People.methods(['get', 'put', 'post', 'delete']);
People.register(router, '/people');

/*router.post('/api/people', function(req, res) {
	console.log("kdkahsd");
	console.log(req.body);
	console.log("Information received | Name: " + req.body.name + " | Address: " + req.body.address + " | Occupation: " + req.body.occupation);
	res.send("Done !");
});*/


// Return router
module.exports = router;