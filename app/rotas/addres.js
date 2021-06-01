const bcrypt = require('bcrypt');
const { response } = require('express');
const express = require('express');
const Router = express.Router();
const authMiddleware = require('../middleware/auth.js');
const Address = require('../database/model/addres');


Router.use(authMiddleware);

Router.get('/', async (req, res) => {
    const user_id = req.userId;
    const address = await Address.findAll({
      where: {
        user_id: user_id
      }
    });

    return res.json(address);
  });



Router.get('/:id', async (req, res) => {

  const {id} = req.params;
  
  const address = await Address.findByPk(id);
  
  res.json(address);
});


Router.post('/', async (req, res) => {

    const {cep, logradouro , numero, bairro, localidade, uf, complemento, latitude, lontitude } = req.body;
    
    const user_id = req.userId;
    const address = await Address.create({ user_id: user_id, cep, logradouro, numero, bairro, localidade, uf, complemento, latitude, lontitude });
    
    res.json(address);
  });



  Router.delete('/:id', async (req, res) => {

    const {id} = req.params;
    
    const address = await Address.destroy({ where: {firstName: id} });
    
    res.json(address);
  });

module.exports = Router;


