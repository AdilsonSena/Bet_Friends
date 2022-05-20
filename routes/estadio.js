const express = require('express');
const router = express.Router();

const estadioController =  require('../controllers/estadioController');

/*CRUD ESTADIOS*/
router.post('/estadio/', estadioController.createEstadio);
router.get('/estadio/', estadioController.listEstadios);
router.put('/estadio/:id', estadioController.updateEstadio);
router.delete('/estadio/:id', estadioController.deleteEstadio);

module.exports = router;