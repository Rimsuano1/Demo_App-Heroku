var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin Page' , name: "Ly Ly Ly" });
});

module.exports = router;
