// let express = require('express');
// const app = express();

// app.listen(3000, function () {
//     console.log('Servidor rodando na porta 3000.');
// });

// app.get('/teste', function (req, res) {
//     console.log('Recebida requisicao de teste na porta 3000.')
//     res.send('OK.');
// });

var app = require('./config/custom-express')();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});