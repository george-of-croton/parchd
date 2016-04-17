var express = require('express');
var router = express.Router();
var fs = require("fs")


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get/water")
  res.render('water');
})

module.exports = router;
