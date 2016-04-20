var express = require('express');
var router = express.Router();
var fs = require("fs")
var models = require('./../models/water.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get/water")
  models.all()
  res.render('water');
})

module.exports = router;
