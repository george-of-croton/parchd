var express = require('express');
var router = express.Router();
var fs = require('fs')
var models = require('./../models/water.js')

// var knexConfig = require('../knexfile')
// var knex = require('knex')( knexConfig['development'] )


var knex = require('knex')( require('./../knexfile')[process.env.NODE_ENV || 'development'] )


/*  POST form data*/

router.post('/', function(req, res, data){
  console.log(JSON.stringify(req.body.name), "this is req.body")
  var data = JSON.stringify(req.body)
  console.log(data.name)
  knex('water_sources').insert({
    name: req.body.name,
    location: req.body.locale,
    review: req.body.description,
    quality: req.body.quality,
    latitude: req.body.lat,
    longitude: req.body.lng
  })
  .then(function(){
    models.all()
  })
  .catch(function(e){
    console.log(e, "this is the error log")
  })
  res.end()
})

router.get('/new', function(req, res, next){
  fs.readFile('response.json',function(err, data){
    if (err) throw err;
      res.redirect('/water')
  })

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create')
});

module.exports = router;
