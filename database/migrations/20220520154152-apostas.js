<<<<<<< HEAD:database/migrations/20220515141752-apostas_personalizadas.js
<<<<<<< HEAD
=======
>>>>>>> Nicholas:database/migrations/20220520154152-apostas.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD:database/migrations/20220515141752-apostas_personalizadas.js
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
=======
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
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,       
>>>>>>> Nicholas:database/migrations/20220520154152-apostas.js
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

<<<<<<< HEAD:database/migrations/20220515141752-apostas_personalizadas.js
  down: async (queryInterface, Sequelize) =>{
     await queryInterface.dropTable('apostas_personalizadas');
     
  }
};
=======
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
>>>>>>> master
=======
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apostas');

  }
};
>>>>>>> Nicholas:database/migrations/20220520154152-apostas.js
