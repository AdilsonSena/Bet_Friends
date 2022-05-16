
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clube', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nome_clube: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      sigla_clube: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      id_estadio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estadio',
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
     await queryInterface.dropTable('clube');
     
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clube', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nome_clube: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      sigla_clube: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      id_estadio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estadio',
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
     await queryInterface.dropTable('clube');
     
  }
};

