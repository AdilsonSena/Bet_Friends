const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const userModel = require('../database/models/user');

const loginController = {
    login: async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            req.flash('errors', errors.mapped());
            req.flash('values', req.body);

            res.redirect('/login');
            return;


        }

        const { email, password, sub} = req.body;
        const user = await userModel.findOne({ where: { email } });

        try {
            if (user) {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);

                if (isPasswordCorrect || sub === user.sub) {
                    req.session.user = user;

                    res.redirect('/config')

                    return ;
                }
            }
            return;
        } catch (error) {
             res.status(400).json(error)
             return;

        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = loginController;