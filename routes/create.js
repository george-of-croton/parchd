var express = require('express');
var router = express.Router();
var fs = require('fs')

/*  POST form data*/

router.post('/', function(req, res, data){
  fs.writeFile('response.json', JSON.stringify(req.body), function(err){
    if(err){
      console.log("error with writefile")
    }
    else{
      console.log("json saved")
    }
  })
  res.end()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create')
});

module.exports = router;
