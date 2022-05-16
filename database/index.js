
const Sequelize = require("sequelize");
const configDB = require("./config/config.js");
const User = require("./models/user");
const Campeonato = require("./models/campeonato");
const Data = require("./models/data");
const connection = new Sequelize(configDB);

User.init(connection);
Campeonato.init(connection);
Data.init(connection);

module.exports = connection;

