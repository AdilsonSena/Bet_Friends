const {Model, DataTypes} = require('sequelize');

class Jogo extends Model {
  static init(sequelize) {
    super.init({
      id_data: {
        type: DataTypes.INTEGER,
        references: {
          model: 'data',
          key: 'id'
        }},
      id_campeonato: {
        type: DataTypes.INTEGER,
        references: {
          model: 'campeonato',
          key: 'id'
        }},
      id_estadio: {
        type: DataTypes.INTEGER,
        references: {
          model: 'estadio',
          key: 'id'
        }},
      id_visitante: {
        type: DataTypes.INTEGER,
        references: {
          model: 'clube_visitante',
          key: 'id'
        }},
      id_casa: {
        type: DataTypes.INTEGER,
        references: {
          model: 'clube_casa',
          key: 'id'
        }},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
      }, {
        tableName: 'jogo',
        timestamps: true,
        underscored: false,
        sequelize
      })
  }
};

module.exports = Jogo;
