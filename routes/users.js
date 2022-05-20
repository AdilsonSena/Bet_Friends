const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const registerValidator = require('../middlewares/validators/registerValidator');
const controllerUserAutorizado = require('../controllers/userAutorizadoController');
const controllerAutorizacao = require('../controllers/autorizacaoController')
const controllerApostaHasJogo = require('../controllers/apostaHasJogoController')
const controllerJogo = require('../controllers/jogoController')
const controllerCampeonato = require("../controllers/campeonatoController");
const controllerData = require("../controllers/dataController");
const controllerCreateAposta = require('../controllers/createApostaController.js')


/* GET users listing.*/
router.get('/', controller.listUsers);
router.post('/', registerValidator,controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

/* GET users_autorizados listing. */
router.get('/users_autorizados', controllerUserAutorizado.listUser_autorizados)
router.post('/users_autorizados', controllerUserAutorizado.createUser_autorizado)
router.put('/users_autorizados/:id',controllerUserAutorizado.updateUser_autorizado)
router.delete('/users_autorizados/:id',controllerUserAutorizado.deleteUser_autorizado)

/* GET autorizacoes listing. */
router.get('/autorizacoes', controllerAutorizacao.listAutorizacoes)
router.post('/autorizacoes', controllerAutorizacao.createAutorizacao)
router.put('/autorizacoes/:id', controllerAutorizacao.updateAutorizacao)
router.delete('/autorizacoes/:id', controllerAutorizacao.deleteAutorizacao)

module.exports = router;