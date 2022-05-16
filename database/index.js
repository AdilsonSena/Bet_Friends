const Sequelize = require('sequelize');
const configDB = require('./config/config.js');
const User = require('./models/user');
const User_autorizado = require('./models/user_autorizado');
const Autorizacao = require('./models/autorizacao');
const ApostaHasJogo = require('./models/apostaHasJogo');
const connection = new Sequelize(configDB)

User.init(connection);
User_autorizado.init(connection);
Autorizacao.init(connection);
ApostaHasJogo.init(connection);

module.exports = connection;