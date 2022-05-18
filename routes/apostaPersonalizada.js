const express = require('express');
const router = express.Router();

const apostaPController = require('../controllers/apostaPController');

/*CRUD APOSTAS PERSONALIZADAS */
router.post('/aposta/', apostaPController.createApostaPersonalizada);
router.get('/aposta/', apostaPController.listApostasPersonalizadas);
router.put('/aposta/:id', apostaPController.updateApostaPersonalizada);
router.delete('/aposta/:id', apostaPController.deleteApostaPersonalizada);

module.exports = router;