'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jogo', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      id_data: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'data',
          key: 'id'
        }
      },
      id_campeonato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'campeonato',
          key: 'id'
        }
      },
      id_estadio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estadio',
          key: 'id'
        }
      },
      id_visitante: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clube',
          key: 'id'
        }
      },
      id_casa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clube',
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
     await queryInterface.dropTable('jogo');
  }
};