const res = require('express/lib/response');
const createApostaModel = require('../database/models/createAposta');


module.exports = {
createCreateAposta: async (req, res) => {
        try {
            const {
                id_apostas, 
                odd_casas,
                odd_visitantes,
                odd_empate
            }
            = req.body;
            const createAposta = await createApostaModel.create({
                id_apostas, 
                odd_casas,
                odd_visitantes,
                odd_empate 
            });
            res.status(200).json(createAposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        } 
    },
    listCreateAposta: async (req, res) => {
        try {
            
            const createAposta = await createApostaModel.findAll(
                
            );
            res.status(200).json(createAposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
     updateCreateAposta: async (req, res) => {
        try {
            const { id } = req.params;
            const {
                id_apostas, 
                odd_casas,
                odd_visitantes,
                odd_empate
            }
            = req.body;
            const createAposta = await createApostaModel.update({
                id_apostas, 
                odd_casas,
                odd_visitantes,
                odd_empate 
            }, {
                where: { id }
            
            });
            res.status(200).json(createAposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    },
    deleteCreateAposta: async (req, res) => {
        try {
            const { id } = req.params;
            const createAposta = await createApostaModel.destroy({
                where: { id } 
            }
                
            );
            res.status(200).json(createAposta);
            return;
        } catch (error) {
            res.status(400).json(error);
            return;
        }
    }

};




