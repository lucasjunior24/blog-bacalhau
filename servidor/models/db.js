const Sequelize = require('sequelize');
const sequelize = new Sequelize('visitantes', 'root', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(() => {
    console.log("Falha ao conectar: " + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}