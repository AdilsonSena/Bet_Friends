const express = require('express');
const router = express.Router();

const apostaController = require('../controllers/apostaController');

/*CRUD APOSTAS PERSONALIZADAS */
router.post('/aposta/', apostaController.createAposta);
router.get('/aposta/', apostaController.listApostas);
router.put('/aposta/:id', apostaController.updateAposta);
router.delete('/aposta/:id', apostaController.deleteAposta);

router.put('/aposta/:id/ativa', apostaController.desativarAposta);
router.get('/aposta/ativa', apostaController.listApostasAtivas);

module.exports = router;