const user_autorizadoModel = require('../database/models/user_autorizado');

module.exports = {
    createUser_autorizado: async (req, res) => {
        try {
            const {
                id_autorizacoes,
                id_apostas_personalizadas
            } = req.body;

            const user_autorizado = await user_autorizadoModel.create({
                id_autorizacoes,
                id_apostas_personalizadas
            });

            res.status(201).json(user_autorizado);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    listUser_autorizados: async (req, res) => {
        try {
            const user_autorizados = await user_autorizadoModel.findAll();

            res.status(200).json(user_autorizados);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateUser_autorizado: async (req, res) => {
        try {
            const { id } = req.params;
            const {
                id_autorizacoes,
                id_apostas_personalizadas
            } = req.body;

            const user_autorizado = await user_autorizadoModel.findOne({ where: { id } });

            if (user_autorizado) {
                const user_autorizado = await user_autorizadoModel.update({
                    id_autorizacoes,
                    id_apostas_personalizadas
                }, {
                    where: { id }
                });
                return res.status(200).json(user_autorizado);
            } else {
                res.status(404).json({ message: 'User_autorizado not found' });
                return;
            }
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteUser_autorizado: async (req, res) => {
        try {
            const { id } = req.params;

            const user_autorizado = await user_autorizadoModel.findOne({ where: { id } });

            if (user_autorizado) {
                const user_autorizado = await user_autorizadoModel.destroy({
                    where: { id }
                });
                return res.status(200).json(user_autorizado);
            } else {
                res.status(404).json({ message: 'User_autorizado not found' });
                return;
            }
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }
};