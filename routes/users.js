const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const apostaPController = require('../controllers/apostaPController');
const registerValidator = require('../middlewares/validators/registerValidator');
const estadioController =  require('../controllers/estadioController');
const clubeController =  require('../controllers/clubeController');
const clubeVisitanteController =  require('../controllers/clubeVisitanteController');

/* GET users listing. */
router.get('/', controller.listUsers);
router.post('/', registerValidator,controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

/*CRUD APOSTAS PERSONALIZADAS */
router.post('/aposta/', apostaPController.createApostaPersonalizada);
router.get('/aposta/', apostaPController.listApostasPersonalizadas);
router.put('/aposta/:id', apostaPController.updateApostaPersonalizada);
router.delete('/aposta/:id', apostaPController.deleteApostaPersonalizada);

/*CRUD ESTADIOS*/
router.post('/estadio/', estadioController.createEstadio);
router.get('/estadio/', estadioController.listEstadios);
router.put('/estadio/:id', estadioController.updateEstadio);
router.delete('/estadio/:id', estadioController.deleteEstadio);

/*CRUD CLUBES*/
router.post('/clube/', clubeController.createClube);
router.get('/clube/', clubeController.listClubes);
router.put('/clube/:id', clubeController.updateClube);
router.delete('/clube/:id', clubeController.deleteClube);

/*CRUD CLUBES VISITANTE*/
router.post('/clubeVisitante/', clubeVisitanteController.createClubeVisitante);


module.exports = router;
