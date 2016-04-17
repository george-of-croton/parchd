var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get/water")
  res.render('water');
    })
router.get('/create', function(req, res, next) {
  res.render('create')
})



module.exports = router;
