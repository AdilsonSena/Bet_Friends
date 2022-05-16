const apostaModel = require('../database/models/apostaPersonalizada');

const apostaPController = {
    createApostaPersonalizada: async (req, res) => {
        const { titulo_aposta_personalizada, regras_apostas_personalizadas, valor_apostas, data_aposta } = req.body;

        try {
            const apostaPersonalizada = await apostaModel.create({
                titulo_aposta_personalizada,
                regras_apostas_personalizadas,
                valor_apostas,
                data_aposta,
            });
    
            res.status(201).json(apostaPersonalizada);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
        
    },
    listApostasPersonalizadas: async (req, res) => {
        try {
            const apostasPersonalizadas = await apostaModel.findAll();
            res.status(200).json(apostasPersonalizadas);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },

    updateApostaPersonalizada: async (req, res) => {
        const { id } = req.params;
        const { titulo_aposta_personalizada, regras_apostas_personalizadas, valor_apostas, data_aposta } = req.body;

        try {
            const apostaPersonalizada = await apostaModel.update({
                titulo_aposta_personalizada,
                regras_apostas_personalizadas,
                valor_apostas,
                data_aposta,
            }, {
                where: { id }
            });

            res.status(200).json(apostaPersonalizada);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteApostaPersonalizada: async (req, res) => {
        const { id } = req.params;

        try {
            const apostaPersonalizada = await apostaModel.destroy({
                where: { id }
            });

            res.status(200).json(apostaPersonalizada);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }

}

module.exports = apostaPController;