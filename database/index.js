const Sequelize = require('sequelize');
const configDB = require('./config/config.js');
const connection = new Sequelize(configDB)

const User = require('./models/user');
const Aposta = require('./models/aposta');
const apostaUser = require('./models/apostaUser');

User.init(connection);
Aposta.init(connection);
apostaUser.init(connection);



module.exports = connection;