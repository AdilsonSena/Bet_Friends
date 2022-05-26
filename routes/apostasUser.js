const express = require('express');
const router = express.Router();


const apostaUserController = require('../controllers/apostaUserController');

router.get('/apostasUser', apostaUserController.listApostasUser);
router.post('/apostasUser', apostaUserController.createApostaUser);
router.delete('/apostasUser/:id', apostaUserController.deleteApostaUser);
router.put('/apostasUser/:id', apostaUserController.updateApostaUser);

module.exports = router;