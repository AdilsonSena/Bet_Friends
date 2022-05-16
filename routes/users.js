const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const registerValidator = require('../middlewares/validators/registerValidator');
const controllerCreateAposta = require('../controllers/createApostaController.js')

/* GET users listing. */
router.get('/', controller.listUsers);
router.post('/', registerValidator,controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);


/* GET createAposta listing. */
router.get('/createAposta', controllerCreateAposta.listCreateAposta);
router.post('/createAposta', controllerCreateAposta.createCreateAposta);
router.put('/createAposta/:id', controllerCreateAposta.updateCreateAposta);
router.delete('/createAposta/:id', controllerCreateAposta.deleteCreateAposta);

module.exports = router;


