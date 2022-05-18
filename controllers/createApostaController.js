const apostaModel = require('../database/models/aposta');

module.exports = {
createCreateAposta: async (req, res) => {
        try {
            const {
                id_jogo, 
                odd_casas,
                odd_visitantes,
                odd_empate
            }
            = req.body;
            const createAposta = await apostaModel.create({
                id_jogo, 
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
            
            const createAposta = await apostaModel.findAll(
                
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
                id_jogo, 
                odd_casas,
                odd_visitantes,
                odd_empate
            }
            = req.body;
            const createAposta = await apostaModel.update({
                id_jogo, 
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
            const createAposta = await apostaModel.destroy({
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




