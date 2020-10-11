const db = require('./db');

const Visitante = db.sequelize.define('visitantes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    pergunta: {
        type: db.Sequelize.TEXT
    }
})

Visitante.sync({ force: true });
module.exports = Visitante