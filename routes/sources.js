var express = require('express');
var router = express.Router();
var models = require('./../models/water')
var knex = require('knex')( require('./../knexfile')[process.env.NODE_ENV || 'development'] )


router.get('/', function(req, res, next){
	knex.select().table('water_sources')
	.then(function (data){
		console.log(data, "this is data")
		res.render('sources', {places: data})
	})
})

module.exports = router;