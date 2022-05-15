"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("apostas_personalizadas", {
      id_apostas_personalizadas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      titulo_personalizadas: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      regras_personalizadas: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      valor_personalizadas: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_personalizadas: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("apostas_personalizadas");
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("autorizacoes", {
      id_autorizacoes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("autorizacoes");
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users_autorizados", {
      id_users_autorizacoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "autorizacoes",
          key: "id",
        },
        id_autorizacoes: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "autorizacoes",
            key: "id",
          },
        },
        id_apostas_personalizadas: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "apostas_personalizadas",
            key: "id",
          },
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users_autorizados");
  },
};
