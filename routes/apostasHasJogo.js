const express = require('express');
const router = express.Router();

const controllerApostaHasJogo = require('../controllers/apostaHasJogoController')

/* GET Aposta Has Jogo listing. */
router.get('/apostaHasJogo', controllerApostaHasJogo.listApostaHasJogo)
router.post('/apostaHasJogo', controllerApostaHasJogo.createApostaHasJogo)
router.put('/apostaHasJogo/:id', controllerApostaHasJogo.updateApostaHasJogo)
router.delete('/apostaHasJogo/:id', controllerApostaHasJogo.deleteApostaHasJogo)

module.exports = router;