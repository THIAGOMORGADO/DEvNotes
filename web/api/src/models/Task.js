const { DataTypes } = require("sequelize")

const connection = require("../config/db")

const Task = connection.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  useId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

// Criando tabela no banco de dados
Task.sync()

module.exports = Task
