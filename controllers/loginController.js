const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const userModel = require('../database/models/user');

const loginController = {
    login: async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            req.flash('errors', errors.mapped());
            req.flash('values', req.body);

            return res.redirect('/login');
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ where: { email } });

        try {
            if (user) {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);

                if (isPasswordCorrect) {
                    req.session.user = user;
                    return res.redirect('/config').render('/users/config',{ user: {
                        username: user.username,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        cpf: user.cpf,
                        birthDate: user.birthDate,
                        
                    } });

                }
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};

module.exports = loginController;