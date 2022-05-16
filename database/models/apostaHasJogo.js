const {Model, DataTypes} = require('sequelize');

class ApostaHasJogo extends Model{
  static init(sequelize){
    super.init({
      aposta_id_apostas: DataTypes.INTEGER,
      jogo_id_jogo: DataTypes.INTEGER,
      createAt: DataTypes.DATE,
      updateAt: DataTypes.DATE
    }, {
      tableName: 'aposta_has_jogo',
      timestamps: false,
      underscored: false,
      sequelize
    })
  }
};

module.exports = ApostaHasJogo;