// Configurando a conexao com banco de dados musql
const Sequelize = require("sequelize")

const connection = new Sequelize("DB_Task", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

// ALTENTICANDO A CONEXAO COM BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    console.log("Connected to Sequelize on database...")
  })
  .catch((err) => {
    console.log(err, "Not connected is database connection")
  })

module.exports = connection
