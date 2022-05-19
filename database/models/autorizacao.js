const {Model, DataTypes} = require('sequelize');

class Autorizacao extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
        }, {
            tableName: 'autorizacoes',
            sequelize
        })
    }
  }
module.exports = Autorizacao;