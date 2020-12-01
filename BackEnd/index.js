const { json } = require('express');
const express = require('express');
var cors = require('cors')
require('./app/database');


const app = express()
const port = 5000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use(cors())
app.use(json());

const pages = require('./app/Pages');

// Declarando Locais Publicos das Pages
app.use('/', express.static('./app/Pages/Home'));
app.use('/', express.static('./app/Pages/App'));


const usuario = require('./app/rotas/usuario.js');
const address = require('./app/rotas/addres.js');
const auth = require('./app/rotas/auth.js');
const collection = require('./app/rotas/collection.js');


app.use('/', pages);''
app.use('/usuario', usuario);
app.use('/address', address);
app.use('/auth', auth);
app.use('/collection', collection);


module.exports = app;