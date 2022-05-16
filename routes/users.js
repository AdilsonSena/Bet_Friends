
const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')
const registerValidator = require('../middlewares/validators/registerValidator')
const controllerUserAutorizado = require('../controllers/userAutorizadoController')
const controllerAutorizacao = require('../controllers/autorizacaoController')
const controllerApostaHasJogo = require('../controllers/apostaHasJogoController')
const controllerJogo = require('../controllers/jogoController')

/* GET users listing. */
router.get('/', controller.listUsers)
router.post('/', registerValidator, controller.createUser)
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

/* GET users_autorizados listing. */
router.get('/users_autorizados', controllerUserAutorizado.listUser_autorizados)
router.post(
  '/users_autorizados',
  controllerUserAutorizado.createUser_autorizado
)
router.put(
  '/users_autorizados/:id',
  controllerUserAutorizado.updateUser_autorizado
)
router.delete(
  '/users_autorizados/:id',
  controllerUserAutorizado.deleteUser_autorizado
)

/* GET autorizacoes listing. */
router.get('/autorizacoes', controllerAutorizacao.listAutorizacoes)
router.post('/autorizacoes', controllerAutorizacao.createAutorizacao)
router.put('/autorizacoes/:id', controllerAutorizacao.updateAutorizacao)
router.delete('/autorizacoes/:id', controllerAutorizacao.deleteAutorizacao)

/* GET Aposta Has Jogo listing. */
router.get('/apostaHasJogo', controllerApostaHasJogo.listApostaHasJogo)
router.post('/apostaHasJogo', controllerApostaHasJogo.createApostaHasJogo)
router.put('/apostaHasJogo/:id', controllerApostaHasJogo.updateApostaHasJogo)
router.delete('/apostaHasJogo/:id', controllerApostaHasJogo.deleteApostaHasJogo)

/* GET Jogo listing. */
router.get('/jogo', controllerJogo.listJogo)
router.post('/jogo', controllerJogo.createJogo)
router.put('/jogo/:id', controllerJogo.updateJogo)
router.delete('/jogo/:id', controllerJogo.deleteJogo)

module.exports = router

const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const registerValidator = require("../middlewares/validators/registerValidator");
const controllerCampeonato = require("../controllers/campeonatoController");
const controllerData = require("../controllers/dataController");

/* GET users listing. */
router.get("/", controller.listUsers);
router.post("/", registerValidator, controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

/* GET campeonato listing. */
router.get("/campeonato", controllerCampeonato.listCampeonato);
router.post("/campeonato", controllerCampeonato.createCampeonato);
router.put("/campeonato/:id", controllerCampeonato.updateCampeonato);
router.delete("/campeonato/:id", controllerCampeonato.deleteCampeonato);

/* GET data listing. */
router.get("/data", controllerData.listData);
router.post("/data", controllerData.createData);
router.put("/data/:id", controllerData.updateData);
router.delete("/data/:id", controllerData.deleteData);

module.exports = router;

