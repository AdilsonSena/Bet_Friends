const express =  require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const loginValidator = require('../middlewares/validators/loginValidator');



router.post('/logged', loginValidator, loginController.login);


module.exports = router;