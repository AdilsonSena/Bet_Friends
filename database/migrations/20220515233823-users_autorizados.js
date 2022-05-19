'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_autorizados', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      id_autorizacoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'autorizacoes',
          key: 'id'
        }
      },
      id_apostas_personalizadas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'apostas_personalizadas',
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

  down: async (queryInterface, Sequelize) =>{
     await queryInterface.dropTable('users_autorizados');
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> master
