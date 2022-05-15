'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('apostas_has_jogo', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      aposta_id_apostas: {
        type: Sequelize.INTEGER,
      },
      jogo_id_jogo: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('apostas_has_jogo');
  }
};