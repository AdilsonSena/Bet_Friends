const { body } = require('express-validator');

const loginValidator = [
    body('email')
    .notEmpty()
    .bail()
    .withMessage('O campo email é obrigatório')
    .isEmail()
    .withMessage('Digite um endereço de email válido'),

    body('password')
    .notEmpty()
    .bail()
    .withMessage('O campo senha é obrigatório')
    .isLength({min: 6})
    .withMessage('A senha deve ter no mínimo 6 caracteres')
];

module.exports = loginValidator;