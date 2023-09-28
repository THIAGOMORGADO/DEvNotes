const express = require("express")
const cors = require("cors")

// Controllers

const AccountsController = require("./controller/AccountsController")
const SingControllers = require("./controller/SignControllers")
const TaskController = require("./controller/TaskControllers")

PORT = 3333

const server = express()

server.use(express.json())
server.use(cors())

server.get("/account", AccountsController.show)
server.get("/account/:id", AccountsController.index)
server.put("/account/:id", AccountsController.update)
server.delete("/account/:id", AccountsController.destroy)
server.post("/account", AccountsController.store)

//nao tem uma rota pra logar?

server.post("/account/auth", SingControllers.auth)

// routes Task
server.get("/task", TaskController.index)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
