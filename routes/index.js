var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/logged', function(req, res, next) {
  res.render('loggedHome');
});

router.get('/home1', function(req, res, next) {
  res.render('./partials/header');
});

router.get('/wallet', function(req, res, next) {
  res.render('./user/mywallet.ejs')
})

router.get('/about-us', function(req, res, next) {
  res.render('aboutUs')
})

router.get('/404', function(req, res, next) {
  res.render('error')
})

router.get('/saque', function(req, res, next) {
  res.render('./user/saque')
})

router.get('/deposito-pix', function(req, res, next) {
  res.render('./user/depositoPix')
})

router.get('/confirma-pix', function(req, res, next) {
  res.render('./user/confirmaPix')
})

router.get('/deposito-boleto', function(req, res, next) {
  res.render('./user/depositoBoleto')
})

router.get('/confirma-boleto', function(req, res, next) {
  res.render('./user/confirmarBoleto')
})

router.get('/aposta-veterana', function(req, res, next) {
  res.render('./user/apostaVeterana')
})

router.get('/config', function(req, res, next) {
  res.render('./user/config')
})

router.get('/aposta-responsavel', function(req, res, next) {
  res.render('./user/apostaResponsavel')
})

router.get('/aposta-final', function(req, res, next) {
  res.render('./user/apostaFinal')
})

module.exports = router;
