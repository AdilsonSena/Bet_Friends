const apostaModel = require('../database/models/aposta');

const apostaController = {
    createAposta: async (req, res) => {

        const { titulo, regras, valor_total, data, type, ticket, ativa } = req.body;


        try {
            const aposta = await apostaModel.create({
                
                titulo,
                regras,
                data,
                type,
                ativa,
                ticket,
                valor_total,
            });
    
            res.status(201).json(aposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
        
    },
    listApostas: async (req, res) => {
        try {
            const apostas = await apostaModel.findAll();
            res.status(200).json(apostas);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateAposta: async (req, res) => {
        const { id } = req.params;

        const { titulo,
            regras,
            data,
            type,
            ativa,
            ticket, 
            valor_total, } = req.body;

        try {
            const aposta = await apostaModel.update({
                titulo,
                regras,
                data,
                type,
                ativa,
                ticket,
                valor_total,

            }, {
                where: { id }
            });

            res.status(200).json(aposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteAposta: async (req, res) => {
        const { id } = req.params;

        try {
            const aposta = await apostaModel.destroy({
                where: { id }
            });

            res.status(200).json(aposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    desativarAposta: async (req, res) => {
        const { id } = req.params;

        try {
            const aposta = await apostaModel.update({
                ativa: false
            }, {
                where: { id }
            });
            res.status(200).json(aposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    listApostasAtivas: async (req, res) => {
        try {
            const apostas = await apostaModel.findAll({
                where: { ativa: true }
            });
            res.status(200).json(apostas);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }

}

module.exports = apostaController;