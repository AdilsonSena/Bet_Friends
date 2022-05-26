const userModel = require('../database/models/user');

const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports = {
    createUser: async (req, res) => {
        try {
            
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                req.flash('errors', errors.mapped());
                req.flash('values', req.body);

                 res.redirect('/sign-up');
                 return;
            }

            const {
                username,
                name,
                lastName,
                email,
                password,
                cpf,
                type,
                birthDate,
                sub

            } = req.body;

            const user = await userModel.findOne({ where: { email } });

            if (user) {
                res.status(401).json({ message: 'Usuário já cadastrado nesse email' });
                return;

            } else {

                const hash = await bcrypt.hashSync(password, 10);

                const user = await userModel.create({
                    username,
                    name,
                    lastName,
                    email,
                    password: hash,
                    cpf,
                    type,
                    birthDate, 
                    sub

                });

                res.redirect("/login");
                return;
            }
        } catch (error) {
             res.status(400).json(error)
             return;
        }

    },
    listUsers: async (req, res) => {
        try {
            const users = await userModel.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const {
                username,
                name,
                lastName,
                email,
                password,
                cpf,
                type,
                birthDate
            } = req.body;
            const user = await userModel.findOne({ where: { id } });

            if (user) {
                const user = await userModel.update({
                    username,
                    name,
                    lastName,
                    email,
                    password,
                    cpf,
                    type,
                    birthDate
                }, {
                    where: { id }
                });
                return res.status(200).json(user);
            } else {
                return res.status(200).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await userModel.destroy({
                where: { id: req.params.id }
            });
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};