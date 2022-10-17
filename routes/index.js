const { render } = require('ejs');
var express = require('express');
const authen = require('../models/authenticator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'ATN SHOP' });
});
router.post('/', function(req, res, next) {
  res.render('login.ejs', { title: 'ATN SHOP', message:'' });
});

router.post('/login', async function(req, res, next) {
  let username = req.body.user_acc;
  let password= req.body.user_pwd;
  let authenticated = await authen(username, password);
  console.log(username + ':' + password);
  if (authenticated==true){
    res.render('users', {title: 'Welcome back', user: username, pwd: password});
  } else {
    res.render('login', {title: 'ATN SHOP', message: 'Wrong Username or Password'})
  }
});

module.exports = router;
