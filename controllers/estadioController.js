const estadioModel = require('../database/models/estadio');

const estadioController = {
    createEstadio: async (req, res) => {
        const { nm_estadio, endereco } = req.body;

        try {
            const estadio = await estadioModel.create({
                nm_estadio,
                endereco,
            });

            res.status(201).json(estadio);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    listEstadios: async (req, res) => {
        try {
            const estadios = await estadioModel.findAll();

            res.status(200).json(estadios);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    updateEstadio: async (req, res) => {
        const { nm_estadio, endereco } = req.body;
        const { id } = req.params;

        try {
            const estadio = await estadioModel.update({
                nm_estadio,
                endereco,
            }, {
                where: {
                    id
                }
            });

            res.status(200).json(estadio);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteEstadio: async (req, res) => {
        const { id } = req.params;

        try {
            const estadio = await estadioModel.destroy({
                where: {
                    id
                }
            });

            res.status(200).json(estadio);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }

 };


module.exports = estadioController;