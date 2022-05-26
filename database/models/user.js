const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING(30),
            name: DataTypes.STRING(50),
            lastName: DataTypes.STRING(100),
            email: DataTypes.STRING(100),
            password: DataTypes.STRING(200),
            cpf: DataTypes.STRING(11),
            birthDate: DataTypes.DATE,
            type: DataTypes.STRING(20),
            saldo: DataTypes.DECIMAL(10, 2),
            sub: DataTypes.STRING(30),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            tableName: 'users',
            timestamps: true,
            underscored: false,
            sequelize
        })
    };
    static associate = models => {
        this.belongsToMany(models.apostas, {
            through: 'apostas_users',
            foreignKey: 'user_id',
            otherKey: 'aposta_id',
        });
    }
}

module.exports = User;