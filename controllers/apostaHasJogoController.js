const apostaHasJogoModel = require('../database/models/ApostaHasJogo');

module.exports = {
    createApostaHasJogo: async (req, res) => {
        try {
            const {
                aposta_id_apostas,
                jogo_id_jogo,
                createAt,
                updateAt
            } = req.body;

            const apostaHasJogo = await apostaHasJogoModel.create({
                aposta_id_apostas,
                jogo_id_jogo,
                createAt,
                updateAt
            });

            res.status(200).json(apostaHasJogo);
            return;

        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    listApostaHasJogo: async (req, res) => {
        try {
            const apostaHasJogo = await apostaHasJogoModel.findAll();

            res.status(200).json(apostaHasJogo);
            return;

        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateApostaHasJogo: async (req, res) => {
        try {
            const { id } = req.params;
            const {
                aposta_id_apostas,
                jogo_id_jogo,
                createAt,
                updateAt
            } = req.body;

            const apostaHasJogo = await apostaHasJogoModel.update({
                aposta_id_apostas,
                jogo_id_jogo,
                createAt,
                updateAt
            }, {
                where: { id }
            });

            res.status(200).json(apostaHasJogo);
            return;

        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteApostaHasJogo: async (req, res) => {
        try {
            const { id } = req.params;

            const apostaHasJogo = await apostaHasJogoModel.destroy({
                where: { id }
            });

            res.status(200).json(apostaHasJogo);
            return;

        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }
};