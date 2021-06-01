"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "collectstatus",
      [
        {
          description: "Aguardando Confirmação",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Coleta Confirmada",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Coletor a Caminho",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Coleta Concluida",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
