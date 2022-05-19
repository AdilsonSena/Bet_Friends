const { Model, DataTypes } = require('sequelize');

class CreateAposta extends Model {
    static init(sequelize) {
        super.init({
            id_apostas: DataTypes.INTEGER,

            odd_casas: DataTypes.FLOAT,

            odd_visitantes: DataTypes.FLOAT,

            odd_empate: DataTypes.FLOAT,

            createAt: DataTypes.DATE,

            updateAt: DataTypes.DATE,



        }, {
            tableName: 'createAposta',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }
}
module.exports = CreateAposta;