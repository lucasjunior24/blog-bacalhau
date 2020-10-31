const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const PerguntasController = require('./controllers/PerguntasControllers');
const ProfController = require('./controllers/ProfController');
const RespostasController = require('./controllers/RespostasControllers');

routes
    // users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)

    // projects
    .get('/perguntas', PerguntasController.index)
    .post('/perguntas', PerguntasController.create)
    .put('/perguntas/:id', PerguntasController.update)

    .get('/prof', ProfController.index)
    .post('/prof', ProfController.create)
    .put('/prof/:id', ProfController.update)
    .delete('/prof/:id', ProfController.delete)

    .get('/respostas', RespostasController.index)
    .post('/respostas', RespostasController.create)
    .put('/respostas/:id', RespostasController.update)


module.exports = routes;