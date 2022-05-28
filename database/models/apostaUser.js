const { Model, DataTypes } = require('sequelize');

class ApostaUser extends Model {
    static init (sequelize){
        super.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: DataTypes.INTEGER,
            apostas_id: DataTypes.INTEGER,
            side: DataTypes.BOOLEAN,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            tableName: 'apostas_user',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }

    static associate = models => {
        this.belongsTo(models.users, {
            foreignKey: 'user_id',
            as: 'users'
        });
        this.belongsTo(models.Aposta, {
            foreignKey: 'apostas_id',
            as: 'apostas'
        });
    }
};

module.exports = ApostaUser;