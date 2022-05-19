
const clubeModel = require('../database/models/clube');

const clubeController = {
    createClube: async (req, res) => {
        try {
            const { nome_clube, sigla_clube, id_estadio } = req.body;

            const clube = await clubeModel.findOne({ where: { nome_clube } });

            if (clube) {
                return res.status(400).json({ error: 'Clube já cadastrado' });
            } else {
                const clube = await clubeModel.create({
                    nome_clube,
                    sigla_clube,
                    id_estadio
                });

                res.status(200).json(clube)
                return;
            }

        } catch (error) {
            res.status(400).json(error)
            return;
        }


    },
    listClubes: async (req, res) => {
        try {
            const clubes = await clubeModel.findAll();
            res.status(200).json(clubes)
            return;
        } catch (error) {
            res.status(400).json(error)
            return;
        }
    },
    updateClube: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome_clube, sigla_clube, id_estadio } = req.body;

            const clube = await clubeModel.findOne({ where: { id } });

            if (!clube) {
                return res.status(400).json({ error: 'Clube não encontrado' });
            } else {
                const clube = await clubeModel.update({
                    nome_clube,
                    sigla_clube,
                    id_estadio
                }, { where: { id } });

                res.status(200).json(clube)
                return;
            }

        } catch (error) {
            res.status(400).json(error)
            return;
        }
    },
    deleteClube: async (req, res) => {
        try {
            const { id } = req.params;

            const clube = await clubeModel.findOne({ where: { id } });

            if (!clube) {
                return res.status(400).json({ error: 'Clube não encontrado' });
            } else {
                const clube = await clubeModel.destroy({ where: { id } });

                res.status(200).json({message: 'Clube deletado com sucesso'})
                return;
            }

        } catch (error) {
            res.status(400).json(error)
            return;
        }
    }
};

module.exports = clubeController;