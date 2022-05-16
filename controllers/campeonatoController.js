const campeonatoModel = require("../database/models/campeonato");

module.exports = {
  createCampeonato: async (req, res) => {
    try {
      const campeonato = await campeonatoModel.create(req.body);
      res.status(200).json({
        message: "Campeonato criado com sucesso",
        campeonato,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao criar campeonato",
        error,
      });
    }
  },
  listCampeonato: async (req, res) => {
    try {
      const campeonatos = await campeonatoModel.findAll();
      res.status(200).json({
        message: "Lista de campeonatos",
        campeonatos,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao listar campeonatos",
        error,
      });
    }
  },
  updateCampeonato: async (req, res) => {
    try {
      const campeonato = await campeonatoModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Campeonato atualizado com sucesso",
        campeonato,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao atualizar campeonato",
        error,
      });
    }
  },
  deleteCampeonato: async (req, res) => {
    try {
      const campeonato = await campeonatoModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Campeonato deletado com sucesso",
        campeonato,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao deletar campeonato",
        error,
      });
    }
  },
};
