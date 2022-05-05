const { body } = require('express-validator');


const registerValidator = [
    body('username')
    .notEmpty()
    .withMessage('O campo username é obrigatório'),

    body('name')
    .notEmpty()
    .withMessage('O campo nome é obrigatório'),

    body('lastName')
    .notEmpty()
    .withMessage('O campo sobrenome é obrigatório'),

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
    .isLength({min: 8})
    .withMessage('A senha deve ter no mínimo 8 caracteres'),
    
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
    .isISO8601()
    .withMessage('Digite uma data válida')
]

module.exports = registerValidator;