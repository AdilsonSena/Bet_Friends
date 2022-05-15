const { body } = require('express-validator');
const userModel = require('../../database/models/user');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const loginValidator = [
    body('email')
    .notEmpty()
    .withMessage('Preencha o campo email')
    .bail()
    .isEmail()
    .withMessage('Digite um endereço de email válido')
    .custom(async (value, { req }) => {
        const user = await userModel.findOne({ where: { email: value } });
        if (!user) {
            throw new Error('Este email não está cadastrado');
        }
    }),

    body('password')
    .notEmpty()
    .withMessage('O campo senha é obrigatório')
    .bail()
    .isLength({min: 8})
    .withMessage('A senha deve ter no mínimo 6 caracteres')
    .custom(async (value, { req }) => {
        const user = await userModel.findOne({ where: { email: req.body.email } });
        if (user) {
            const isValid = await bcrypt.compare(value, user.password);
            if (!isValid) {
                throw new Error('Senha incorreta');
            }
        }
    })
];

module.exports = loginValidator;