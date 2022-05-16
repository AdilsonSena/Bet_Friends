'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('apostas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_apostas: {
        type: Sequelize.INTEGER,
      },
      odd_casas: {
        type: Sequelize.FLOAT,
      },
      odd_visitantes: {
        type: Sequelize.FLOAT,
      },
      odd_empate: {
        type: Sequelize.FLOAT,
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('apostas');
  }
};
