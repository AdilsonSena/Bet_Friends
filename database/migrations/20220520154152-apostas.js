'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('apostas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      regras: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      ticket: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor_total:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: false,
            defaultValue: 0
      },
      data:{
        type: Sequelize.DATE,
        allowNull: false,       
      },
      type:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      ativa:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apostas');

  }
};
