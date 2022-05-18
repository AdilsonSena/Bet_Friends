const express = require('express');
const router = express.Router();

const clubeController =  require('../controllers/clubeController');

/*CRUD CLUBES*/
router.post('/clube/', clubeController.createClube);
router.get('/clube/', clubeController.listClubes);
router.put('/clube/:id', clubeController.updateClube);
router.delete('/clube/:id', clubeController.deleteClube);

module.exports = router;