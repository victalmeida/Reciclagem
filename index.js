const { json } = require('express');
const express = require('express');
require('./app/database');

const app = express()
const port = 5000


const usuario = require('./app/rotas/usuario.js');





app.use(json());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use('/usuario', usuario);

module.exports = app;