const autorizacaoModel = require('../database/models/autorizacao');

module.exports = {
    listAutorizacoes: async (req, res) => {
        try {
            const autorizacoes = await autorizacaoModel.findAll();

            res.status(200).json(autorizacoes);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    createAutorizacao: async (req, res) => {
        try {
            const { nome } = req.body;

            const autorizacao = await autorizacaoModel.create({
                nome
            });

            res.status(201).json(autorizacao);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateAutorizacao: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome } = req.body;

            const autorizacao = await autorizacaoModel.findOne({ where: { id } });

            if (autorizacao) {
                const autorizacao = await autorizacaoModel.update({
                    nome
                }, {
                    where: { id }
                });
                return res.status(200).json(autorizacao);
            } else {
                res.status(404).json({ message: 'Autorizacao not found' });
                return;
            }
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteAutorizacao: async (req, res) => {
        try {
            const { id } = req.params;

            const autorizacao = await autorizacaoModel.findOne({ where: { id } });

            if (autorizacao) {
                const autorizacao = await autorizacaoModel.destroy({
                    where: { id }
                });
                return res.status(200).json(autorizacao);
            } else {
                res.status(404).json({ message: 'Autorizacao not found' });
                return;
            }
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }
  };