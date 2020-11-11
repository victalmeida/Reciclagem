const bcrypt = require('bcrypt');
const express = require('express');
const Router = express.Router();
// const authMiddleware = require('../middleware/auth.js');
const User = require('../database/model/user');


// Router.use(authMiddleware);


Router.get('/', (req, res) => {
  
  res.send('get');
});

Router.post('/', async (req, res) => {

  const {nome, email , senha } = req.body;
  
 const pass = bcrypt.hashSync(senha, 10)
  

  const user = await User.create({name:nome, email, senha:pass});
  
  res.json(user);
});

Router.put('/:id', (req, res) => {
  
  // const {id} = req.params;
  // const {nome, email ,senha} = req.body;
  // const newUser = {id: parseInt(id) , nome, email, senha};
  // const index = usuario.findIndex( user => user.id == id );
  // usuario[index] = newUser;
  
  res.send('teste');
});

Router.get('/compare', (req, res) => {

  const hash = '$2b$10$ademseNwwV5rG/HDaMNwC.vASOP.Xhie458Vl.ut.Puf9LHI8OSW2d';
  const senha = 'senha';

  const teste = bcrypt.compareSync(senha, hash);

  return res.send(`teste : ${teste}`);
});



module.exports = Router;