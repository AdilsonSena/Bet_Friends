/*module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'user',
        timestamps: false
    })
    return user;
};*/

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
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            tableName: 'users',
            timestamps: true,
            underscored: false,
            sequelize
        })
    }
}
module.exports = User;