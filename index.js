const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Novo Teste')
})

app.get('/teste', (req, res) => {
    let resposta = req.query;
     console.log('Req:', req.query);
    res.send(resposta)
  })

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;