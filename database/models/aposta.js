const { Model, DataTypes } = require('sequelize');

class Aposta extends Model {
    static init(sequelize) {
        super.init({
            id_jogo: DataTypes.INTEGER,
            odd_casas: DataTypes.FLOAT,
            odd_visitantes: DataTypes.FLOAT,
            odd_empate: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }, {
            tableName: 'apostas',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }
}
module.exports = Aposta;