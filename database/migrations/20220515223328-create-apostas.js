'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('apostas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_jogo:{
        type: Sequelize.INTEGER,
        references: {
          model: 'jogo',
          key: 'id'
        }
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('apostas');
  }
};