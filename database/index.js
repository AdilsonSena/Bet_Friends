const Sequelize = require('sequelize');
const configDB = require('./config/config.js');
const connection = new Sequelize(configDB)

const User = require('./models/user');
const User_autorizado = require('./models/user_autorizado');
const Autorizacao = require('./models/autorizacao');
const ApostaHasJogo = require('./models/apostaHasJogo');
const Campeonato = require("./models/campeonato");
const Data = require("./models/data");
const Aposta = require('./models/apostaPersonalizada');
const Estadio = require('./models/estadio');
const Clube = require('./models/clube');


User.init(connection);
User_autorizado.init(connection);
Autorizacao.init(connection);
ApostaHasJogo.init(connection);
Campeonato.init(connection);
Data.init(connection);
Aposta.init(connection);
Estadio.init(connection);
Clube.init(connection);

module.exports = connection;

