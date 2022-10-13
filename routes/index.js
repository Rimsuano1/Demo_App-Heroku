var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'ATN SHOP' });
});
router.post('/', function(req, res, next) {
  res.render('login.ejs', { title: 'ATN SHOP' });
});

router.post('/login', function(req, res, next) {
  
  res.render('users.ejs', { title: 'WELCOME BACK' });
});

module.exports = router;
