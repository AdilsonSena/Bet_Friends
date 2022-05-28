const apostasUserModel = require('../database/models/apostaUser');


const apostasUserController = {
    createApostaUser: async (req, res) => {
        const { apostas_id, user_id, side } = req.body;

        try {
            const apostaUser = await apostasUserModel.create({
                apostas_id,
                user_id, side
            });

            res.status(201).json(apostaUser);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }

    },
    listApostasUser: async (req, res) => {
        try {
            const apostasUser = await apostasUserModel.findAll();
            res.status(200).json(apostasUser);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteApostaUser: async (req, res) => {
        const { id } = req.params;

        try {
            const apostaUser = await apostasUserModel.destroy({
                where: { id }
            });

            res.status(200).json(apostaUser);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateApostaUser: async (req, res) => {
        const { id } = req.params;
        const { apostas_id, user_id } = req.body;

        try {
            const apostaUser = await apostasUserModel.update({
                apostas_id,
                user_id
            }, {
                where: { id }
            });

            res.status(200).json(apostaUser);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    findUserApostas: async (req, res) => {
        const { id } = req.params;

        try {
            const apostaUser = await apostasUserModel.findAll({
                where: { user_id: id }
            });

            res.status(200).json(apostaUser);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }
};

module.exports = apostasUserController;