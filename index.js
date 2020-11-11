const { json } = require('express');
const express = require('express')
const app = express()
const port = 5000


const usuario = [];
let AI = 0;

app.use(json());

app.get('/', (req, res) => {
  res.send('Novo Teste')
})

app.get('/teste', (req, res) => {
    let resposta = req.query;
     console.log('Req:', req.query);
    res.send(resposta)
  })


  // Rota dos Usuarios.

  app.get('/usuario', (req, res) => {
    
    res.json(usuario);
  });

  app.post('/usuario', (req, res) => {
    AI ++;
    const {nome, email , senha } = req.body;
    const newUser = {
      id : AI,
      nome,
      email,
      senha
    }

    usuario.push(newUser);

    res.json(newUser);
  });

  app.put('/usuario/:id', (req, res) => {
    
    const {id} = req.params;
    const {nome, email ,senha} = req.body;
    const newUser = {id: parseInt(id) , nome, email, senha};
    const index = usuario.findIndex( user => user.id == id );
    usuario[index] = newUser;

    res.send(newUser);
  });

 

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;