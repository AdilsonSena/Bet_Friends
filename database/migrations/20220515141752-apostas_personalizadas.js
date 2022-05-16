'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('apostas_personalizadas', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      titulo_aposta_personalizada: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      regras_apostas_personalizadas: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      valor_apostas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_aposta: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) =>{
     await queryInterface.dropTable('apostas_personalizadas');
     
  }
};
