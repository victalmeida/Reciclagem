const bcrypt = require('bcrypt');
const { response } = require('express');
const express = require('express');
const Router = express.Router();
const authMiddleware = require('../middleware/auth.js');
const jwtMakeHash = require('../middleware/JWT');
const User = require('../database/model/user');


Router.use(authMiddleware);


Router.get('/', async (req, res) => {

  const user = await User.findAll();
  return res.json(user)

});

Router.post('/', async (req, res) => {

  try {
    const { nome, email, password } = req.body;
    const pass = bcrypt.hashSync(password, 10)
    const user = await User.create({ name: nome, email, senha: pass });
    res.json(user);

  }
  catch (err){
   
    if(err.errors[0].message === 'email must be unique')
    {
      return res.status(409).json({erro:'email must be unique'});
    }
    return res.status(400).json({erro: err.errors[0] });
  }
});

Router.put('/:id', (req, res) => {

  // const {id} = req.params;
  // const {nome, email ,senha} = req.body;
  // const newUser = {id: parseInt(id) , nome, email, senha};
  // const index = usuario.findIndex( user => user.id == id );
  // usuario[index] = newUser;

  res.send('teste');
});







module.exports = Router;