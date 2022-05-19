const express = require('express');
const router = express.Router();

const controllerJogo = require('../controllers/jogoController')

/* GET Jogo listing. */
router.get('/jogo', controllerJogo.listJogo)
router.post('/jogo', controllerJogo.createJogo)
router.put('/jogo/:id', controllerJogo.updateJogo)
router.delete('/jogo/:id', controllerJogo.deleteJogo)

module.exports = router;