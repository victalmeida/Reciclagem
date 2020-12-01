const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('./model/user');
const Address = require ('./model/addres')
const Collection = require ('./model/collection')

const connetion = new Sequelize(dbconfig);

User.init(connetion);
Address.init(connetion);
Collection.init(connetion);


module.exports = connetion;