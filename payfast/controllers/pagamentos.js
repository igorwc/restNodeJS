module.exports = function (app) {
    app.get('/pagamentos', function (req, res) {
        console.log('Recebida requisicao de teste na porta 3000.')
        res.send('OK.');
    });

    app.post('/pagamentos/pagamento', function (req, res) {
        let pagamento = req.body;
        console.log('pagamento', pagamento)
        pagamento.status = 'CRIADO';
        pagamento.data = new Date();

        const connection = app.persistencia.connectionFactory();
        const pagamentoDAO = new app.persistencia.PagamentoDao(connection)
        pagamentoDAO.salva(pagamento, function(erro, resultado){
            if(erro){
              console.log('Erro ao inserir no banco:' + erro);
              res.status(500).send(erro);
            } else {
            console.log('pagamento criado');
            res.location('/pagamentos/pagamento/' +
                  resultado.insertId);
      
            res.status(201).json(pagamento);
          }
          }); 
    });
}