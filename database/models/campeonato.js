const { Model, DataTypes } = require("sequelize");

class Campeonato extends Model {
  static init(sequelize) {
    super.init(
      {
        nm_campeonato: DataTypes.STRING(100),
        divisao: DataTypes.STRING(100),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "campeonato",
        timestamps: true,
        underscored: false,
        sequelize,
      }
    );
  }
}

module.exports = Campeonato;
