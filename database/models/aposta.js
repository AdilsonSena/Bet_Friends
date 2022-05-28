const { Model, DataTypes } = require('sequelize');

class ApostaPersonalizada extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING(100),
            regras: DataTypes.STRING(200),
            data: DataTypes.DATE,
            type: DataTypes.STRING(20),
            ativa: DataTypes.BOOLEAN,
            ticket: DataTypes.INTEGER,
            valor_total: DataTypes.DECIMAL(10,2),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,

        }, {
            tableName: 'apostas',
            timestamps: true,
            underscored: false,
            sequelize
        })
    };
    static associate = models => {
        this.belongsToMany(models.User, { 
            through: 'apostas_users',
            foreignKey: 'user_id',
            otherKey: 'aposta_id', 
        });

    }
    
}

module.exports = ApostaPersonalizada;