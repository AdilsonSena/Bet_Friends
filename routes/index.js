var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/homeAdm', function (req, res, next){
  const type = req.session.user.type;
  if(type === 'admin'){
  res.render('loggedHomeAdm')
  }else{
    res.render('loggedHome')
  }
});

router.get('/logged', function(req, res, next) {
  if(req.session.user){
  res.render('loggedHome');
  }else{
    res.redirect('/sign-up');
  }
});

router.get('/sign-up', function(req, res, next) {
  res.render('sign-up');
})

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.get('/wallet', function(req, res, next) {
  if(req.session.user){
    res.render('./user/mywallet');
  }else{
    res.render('login');
  }
})

router.get('/about-us', function(req, res, next) {
  res.render('aboutUs')
})

router.get('/404', function(req, res, next) {
  res.render('error')
})

router.get('/saque', function(req, res, next) {
  if(req.session.user){
  res.render('./user/saque')
  }else{
    res.render('login');
  }
})

router.get('/deposito-pix', function(req, res, next) {
  if(req.session.user){
  res.render('./user/depositoPix')
  }else{
    res.render('login');
  }
})

router.get('/confirma-pix', function(req, res, next) {
  if(req.session.user){
  res.render('./user/confirmaPix')
  }else{
    res.render('login');
  }
})

router.get('/deposito-boleto', function(req, res, next) {
  if(req.session.user){
  res.render('./user/depositoBoleto')
  }else{
    res.render('login');
  }
})

router.get('/confirma-boleto', function(req, res, next) {
  res.render('./user/confirmarBoleto')
})

router.get('/aposta-veterana', function(req, res, next) {
  if(req.session.user){
  res.render('./user/apostaVeterana')
  }else{
    res.render('login');
  }
})

router.get('/config', function(req, res, next) {
  if(req.session.user){
  res.render('./user/config')
  }else{
    res.render('login');
  }
})

router.get('/aposta-responsavel', function(req, res, next) {
  if(req.session.user){
  res.render('./user/apostaResp')
  }else{
    res.render('login');
  }
})

router.get('/aposta-final', function(req, res, next) {
  if(req.session.user){
  res.render('./user/apostaFinal')
  }else{
    res.render('login');
  }
})

module.exports = router;
