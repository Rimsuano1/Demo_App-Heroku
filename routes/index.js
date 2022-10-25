const { render } = require('ejs');
const Console = require("console");
var express = require('express');
var authen = require('../models/authenticator');
var display_product = require('../models/table_display');
var director_box = require('../models/select_box');
var crud = require('../models/crud');
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
  let [authenticated, shop_id, role] = await authen(username, password);

  if (authenticated==true && role =='user'){
    let table = await display_product(shop_id);
    res.render('users', { title: 'Welcome back', 
                          user: username, 
                          table_string: table});
  } else if(authenticated==true && role =='admin'){
    let box = await director_box();
    let table = await display_product(shop_id);
    res.render('admin', { title: 'ADMIN', 
                          user: username, 
                          select_box: box,
                          table_string: table});
  }
  else {
    res.render('login', {title: 'ATN SHOP', message: 'Wrong Username or Password'})
  }
});
router.post('/select_box', async function(req, res, next) {
  let shop_id=req.body.shop;
  // console.log(shop_id);
  let table = await display_product(shop_id);
  let box = await director_box();
  res.render('admin', {title: 'ADMIN', 
                      user: 'admin',
                      select_box: box,
                      table_string:table})
});
router.post('/crud', async function(req, res, next) {
  //console.log(req.body);
  let results = await crud(req.body);
  //refresh page
  let table = await display_product(req.body.shop_id);
  res.render('users', { title: 'Welcome to ATN shop',
                        user: 'Ly',
                        table_string: table});

});


module.exports = router;
