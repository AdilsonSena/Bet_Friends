const jogoModel = require('../database/models/jogo');

module.exports = {
  createJogo: async (req, res) => {
    try {
      const {
        nome,
        data_inicio,
        data_fim,
        criado_por,
        criado_em,
        atualizado_por,
        atualizado_em
      } = req.body;

      const jogo = await jogoModel.create({
        nome,
        data_inicio,
        data_fim,
        criado_por,
        criado_em,
        atualizado_por,
        atualizado_em
      });

      res.status(200).json(jogo);
      return;

    } catch (error) {
      res.status(400).json(error);
      return;
    }
  },
  listJogo: async (req, res) => {
    try {
      const jogo = await jogoModel.findAll();

      res.status(200).json(jogo);
      return;

    } catch (error) {
      res.status(400).json(error);
      return;
    }
  },
  updateJogo: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        nome,
        data_inicio,
        data_fim,
        criado_por,
        criado_em,
        atualizado_por,
        atualizado_em
      } = req.body;

      const jogo = await jogoModel.update({
        nome,
        data_inicio,
        data_fim,
        criado_por,
        criado_em,
        atualizado_por,
        atualizado_em
      }, {
        where: { id }
      });

      res.status(200).json(jogo);
      return;

    } catch (error) {
      res.status(400).json(error);
      return;
    }
  },
  deleteJogo: async (req, res) => {
    try {
      const { id } = req.params;

      const jogo = await jogoModel.destroy({
        where: { id }
      });

      res.status(200).json(jogo);
      return;

    } catch (error) {
      res.status(400).json(error);
      return;
    }
  }
};