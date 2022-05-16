const {Model, DataTypes} = require('sequelize');

class Autorizacao extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(50),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            tableName: 'autorizacoes',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }
  }
module.exports = Autorizacao;