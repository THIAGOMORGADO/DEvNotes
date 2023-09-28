const bcrypt = require("bcrypt")
const User = require("../models/accounts")

const SingControllers = {
  async auth(req, res) {
    const { email, password } = req.body

    console.log(email, password)

    if (!email || !password) {
      return res.status(401).json({
        status: false,
        message: "Bad Request",
      })
    }
    const userData = await User.findOne({
      where: {
        email,
      },
    })

    //caso os dados forem encontrados e o usuario seja um superUsuario
    if (userData && userData.superUser) {
      return res.status(501).json({
        status: false,
        message: "Unable to login, try with dashboard", //usuari é um superUser, retorna um erro
      })
    }

    //caso os dados não forem encontrados
    if (!userData) {
      return res.status(501).json({
        status: false,
        message: "email or password invalid",
      })
    }

    //caso os dados forem encontrados e usuario não for um superUser

    const passwordEncrypted = userData.password //senha encrypada do banco de dados
    const passwordMatch = await bcrypt.compare(password, passwordEncrypted)
    if (passwordMatch) {
      return res.status(200).json({
        status: true,
        message: "login successful",
        user: userData,
      })
    }

    return res.status(501).json({
      status: false,
      message: "email or password invalid",
    })
  },
}

module.exports = SingControllers
