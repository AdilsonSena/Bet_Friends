const dataModel = require("../database/models/data");

module.exports = {
  createData: async (req, res) => {
    try {
      const data = await dataModel.create(req.body);
      res.status(200).json({
        message: "Data criada com sucesso",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao criar data",
        error,
      });
    }
  },
  listData: async (req, res) => {
    try {
      const data = await dataModel.findAll();
      res.status(200).json({
        message: "Lista de datas",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao listar datas",
        error,
      });
    }
  },
  updateData: async (req, res) => {
    try {
      const data = await dataModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Data atualizada com sucesso",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao atualizar data",
        error,
      });
    }
  },
  deleteData: async (req, res) => {
    try {
      const data = await dataModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "Data deletada com sucesso",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao deletar data",
        error,
      });
    }
  },
};
