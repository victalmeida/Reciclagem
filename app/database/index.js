const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const User = require("./model/user");
const Address = require("./model/addres");
const Collection = require("./model/collection");
const Reciclado = require("./model/Reciclado");
const Collectstatus = require("./model/Collectstatus");
const CollectionColetor = require("./model/CollectionColetor");

const connetion = new Sequelize(dbconfig);

User.init(connetion);
Address.init(connetion);
Collection.init(connetion);
Reciclado.init(connetion);
Collectstatus.init(connetion);
CollectionColetor.init(connetion);

Collection.associate(connetion.models);
Address.associate(connetion.models);
User.associate(connetion.models);
Reciclado.associate(connetion.models);
Collectstatus.associate(connetion.models);
CollectionColetor.associate(connetion.models);

module.exports = connetion;
