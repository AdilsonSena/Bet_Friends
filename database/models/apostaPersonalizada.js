const { Model, DataTypes } = require('sequelize');

class ApostaPersonalizada extends Model {
    static init(sequelize) {
        super.init({
            titulo_aposta_personalizada: DataTypes.STRING(100),
            regras_apostas_personalizadas: DataTypes.STRING(200),
            valor_apostas: DataTypes.INTEGER,
            data_aposta: DataTypes.DATE,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,

        }, {
            tableName: 'apostas_personalizadas',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }
}

module.exports = ApostaPersonalizada;