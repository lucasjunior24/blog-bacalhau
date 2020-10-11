const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Visitante = require('../models/visitantes');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json)

// rota para pegar dados
// app.get('/', function (req, res) {
// Visitante.all().then(function (Visitantes) {
//     res.render('add', {
//         nome: Visitante.nome,
//         sobrenome: Visitante.email
//     })
// })
// // res.send("Rota de cadastro post");
// });

// rota para enviar dados
app.post('/add', function (req, res) {
    // pegar dados do formulario
    const dados = req.body
    // res.send("formulario de " + nome + " enviado");
    console.log(dados)
    Visitante.create({
        nome: req.body.name,
        email: req.body.email,
        pergunta: req.body.pergunta
    }).then(function () {
        // console.log(req.body.name),
        res.send("Post criado com sucesso, novo usuario salvo no banco ");
        // return res.send()
    }).catch(function (erro) {
        res.send("Houve um erro: " + erro);
    })
    // return res.json(dados);
});
app.get('/add', function (req, res) {
    Visitante.findAll().then((visitante) => {
        res.send(visitante)
    })

})


app.listen(8081, function () {
    console.log('servidor rodando em http://localhost:8081');
});