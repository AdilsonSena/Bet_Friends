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
            aposta_id: DataTypes.INTEGER,
        }, {
            tableName: 'apostas_users',
            timestamps: false,
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
            foreignKey: 'aposta_id',
            as: 'apostas'
        });
    }
};

module.exports = ApostaUser;