const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const PerguntasController = require('./controllers/PerguntasControllers');

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


module.exports = routes;