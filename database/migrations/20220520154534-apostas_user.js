'use strict';

module.exports = {
 up: async  (queryInterface, Sequelize) => {
    await queryInterface.createTable('apostas_user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      apostas_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'apostas',
          key: 'id'
        }
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

 down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apostas_user');
  }
};
