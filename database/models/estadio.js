const {Model, DataTypes} = require('sequelize');

class Estadio extends Model {
    static init(sequelize) {
        super.init({
            nm_estadio: DataTypes.STRING(100),
            endereco: DataTypes.STRING(100),
            createdAt:DataTypes.DATE,
            updatedAt: DataTypes.DATE, 
        },{
            tableName: 'estadio',
            timestamps : true,
            underscored: false,
            sequelize
        })
    }
}
module.exports = Estadio;