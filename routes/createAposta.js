const express = require('express');
const router = express.Router();

const controllerCreateAposta = require('../controllers/createApostaController.js')

/* GET createAposta listing.*/
router.get('/createAposta', controllerCreateAposta.listCreateAposta);
router.post('/createAposta', controllerCreateAposta.createCreateAposta);
router.put('/createAposta/:id', controllerCreateAposta.updateCreateAposta);
router.delete('/createAposta/:id', controllerCreateAposta.deleteCreateAposta);

module.exports = router;