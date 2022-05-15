const { body } = require('express-validator');
const userModel = require('../../database/models/user');
const sequelize = require('sequelize');



const registerValidator = [
    body('username')
    .notEmpty()
    .withMessage('O campo Apelido é obrigatório'),

    body('name')
    .notEmpty()
    .withMessage('Preencha o campo nome'),

    body('lastName')
    .notEmpty()
    .withMessage('Preencha o campo sobrenome'),

    body('email')
    .notEmpty()
    .withMessage('O campo email é obrigatório')
    .isEmail()
    .withMessage('Digite um endereço de email válido')
    .custom(async (value, { req }) => {
        const user = await userModel.findOne({ where: { email: value } });
        if (user) {
            throw new Error('Este email já está cadastrado');
    }}),

    body('password')
    .notEmpty()
    .bail()
    .withMessage('O campo senha é obrigatório')
    .isLength({min: 8})
    .withMessage('A senha deve ter no mínimo 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    
    body('checkpassword')
    .notEmpty()
    .bail()
    .withMessage('O campo confirmar senha é obrigatório')
    .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Senhas não conferem');
        }
        return true;
    }),

    body('cpf')
    .notEmpty()
    .bail()
    .withMessage('O campo cpf é obrigatório')
    .isLength({min: 11})
    .withMessage('O cpf deve ter 11 caracteres'),
    

    body('birthDate')
    .notEmpty()
    .bail()
    .withMessage('O campo data de nascimento é obrigatório')
    .isBefore('2004-01-01')
    .withMessage('Você precisa ter mais de 18 anos para se cadastrar'),
]

module.exports = registerValidator;