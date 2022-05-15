'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('campeonato', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nm_campeonato: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      divisao: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) =>{
     await queryInterface.dropTable('campeonato');
     
  }
};
