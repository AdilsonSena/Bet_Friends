"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("apostas_personalizadas", {
      id_apostas_personalizadas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo_personalizadas: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      regras_personalizadas: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      valor_personalizadas: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_personalizadas: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("apostas_personalizadas");
  },
};
