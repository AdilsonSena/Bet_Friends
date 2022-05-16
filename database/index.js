const Sequelize = require('sequelize');
const configDB = require('./config/config.js');
const connection = new Sequelize(configDB)

const User = require('./models/user');
const Aposta = require('./models/apostaPersonalizada');
const Estadio = require('./models/estadio');
const Clube = require('./models/clube');
const ClubeVisitante = require('./models/clubeVisitante');

Aposta.init(connection);
User.init(connection);
Estadio.init(connection);
Clube.init(connection);
ClubeVisitante.init(connection);

module.exports = connection;