module.exports = (sequelize, DataTypes) => {
  const Jogo = sequelize.define("jogo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_visitante: {
        type: DataTypes.INTEGER,
      },
      id_casa: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'jogo',
      timestamps: false,
    }
  );

  Jogo.associate = function (models) {

    Jogo.belongsTo(models.Data, {
      as: 'data',
      foreignKey: 'ID_DATA',
    });
    Jogo.belongsTo(models.Campeonato, {
      as: 'campeonato',
      foreignKey: 'ID_CAMPEONATO',
    });
    Jogo.belongsTo(models.Estadio, {
      as: 'estadio',
      foreignKey: 'ID_ESTADIO',
    });
  }

  return Jogo;
};