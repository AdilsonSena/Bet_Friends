const { Model, DataTypes } = require("sequelize");

class Data extends Model {
  static init(sequelize) {
    super.init(
      {
        horario: DataTypes.INTEGER,
        data_jogo: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "data",
        timestamps: true,
        underscored: false,
        sequelize,
      }
    );
  }
}
module.exports = Data;
