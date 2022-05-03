const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const registerValidator = require('../middlewares/validators/registerValidator');

/* GET users listing. */
router.get('/', controller.listUsers);
router.post('/', registerValidator,controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
