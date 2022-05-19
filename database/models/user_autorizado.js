const {Model, DataTypes} = require('sequelize');

class User_autorizado extends Model {
    static init(sequelize) {
        super.init({
          id_autorizacoes: {
            type: DataTypes.STRING(3),
            references: {
              model: 'autorizacoes',
              key: 'id'
            }},
          id_apostas_personalizadas: {
            type: DataTypes.STRING(3),
            references: {
              model: 'apostas_personalizadas',
              key: 'id'
            }},
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE
          }, {
            tableName: 'users_autorizados',
            timestamps: true,
            underscored: false,
            sequelize
          })
    }
}


module.exports = User_autorizado;