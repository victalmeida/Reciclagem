'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at:{
          type: sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: sequelize.DATE,
          allowNull: false
        }
        
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('users');
     
  }
};
