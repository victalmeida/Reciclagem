'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return( queryInterface.createTable('addresses',{
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cep:{
          type: Sequelize.STRING,
          allowNull: false
        },
        logradouro:{
          type: Sequelize.STRING,
          allowNull: false
        },
        numero:{
          type: Sequelize.STRING,
          allowNull: false
        },
        bairro:{
          type: Sequelize.STRING,
          allowNull: false
        },
        localidade:{
          type: Sequelize.STRING,
          allowNull: false
        },
        uf:{
          type: Sequelize.STRING,
          allowNull: false
        },
        complemento:{
          type: Sequelize.STRING,
          allowNull: false
        },
        latitude:{
          type: Sequelize.STRING,
          allowNull: false
        },
        lontitude:{
          type: Sequelize.STRING,
          allowNull: false
        },
        complemento:{
          type: Sequelize.STRING,
          allowNull: true
        },
        created_at:{
          type: sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: sequelize.DATE,
          allowNull: false
        }

    }));
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('addresses');
     
  }
};
