"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "collector", Sequelize.BOOLEAN, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "collector", {});
  },
};
