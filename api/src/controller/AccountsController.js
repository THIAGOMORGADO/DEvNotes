const bcrypt = require("bcrypt")
const User = require("../models/accounts")

const AccountsController = {
  async index(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (user) {
      return res.json(user)
    }
    return res.json({ message: "user not found" })
  },

  async show(req, res) {
    const user = await User.findAll()
    return res.status(200).json(user)
  },

  async store(req, res) {
    //precisa de 4 paramentros pra autneticar
    const { name, email, password, superUser } = req.body

    const Email_exists = await User.findOne({
      where: { email },
    })

    if (!Email_exists) {
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await User.create({
        name,
        email,
        password: passwordHash,
        superUser,
      })
      return res
        .status(200)
        .json({ message: "account created successfully", user })
    }

    return res.status(200).json({
      message: "email already exists",
    })
  },

  async update(req, res) {
    const { id } = req.params
    const { email } = req.body

    await User.update(
      {
        email,
      },
      {
        where: {
          id: id,
        },
      }
    )

    return res.status(201).json({
      message: "user updated!",
    })
  },
  async destroy(req, res) {
    const { id } = req.params

    const user_exists = await User.findOne({
      where: {
        id: id,
      },
    })
    if (user_exists) {
      await User.destroy({
        where: {
          id: id,
        },
      })
      return res.status(200).json({
        message: "user deleted!",
      })
    } else {
      return res.status(201).json({
        message: "user not found",
      })
    }

    return res.status(201).json({
      message: "user deleted!",
    })
  },
}
module.exports = AccountsController
