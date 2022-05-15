"use strict";

module.exports = {
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
