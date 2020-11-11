const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('./model/user');

const connetion = new Sequelize(dbconfig);

User.init(connetion);



module.exports = connetion;