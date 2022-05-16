const { Model, DataTypes } = require('sequelize');

class Clube extends Model {
    static init(sequelize) {
        super.init({
            nome_clube: DataTypes.STRING(50),
            sigla_clube: DataTypes.STRING(50),
            id_estadio: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'estadio',
                    key: 'id'
                }
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },{
            tableName: 'clube',
            timestamps : true,
            underscored: false,
            sequelize
        })
    }
}
module.exports = Clube;