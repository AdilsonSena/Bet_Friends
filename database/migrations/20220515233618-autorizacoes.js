"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("autorizacoes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("autorizacoes");
  },
};