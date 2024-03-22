const { generateSign } = require('../../utils/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })

    const duplicateUser = await User.findOne({ username: req.body.email })

    if (duplicateUser) {
      return res.status(400).json('This email address is already registered')
    }

    const userSaved = await newUser.save()
    return res.status(200).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    console.log(user)
    if (!user) {
      return res.status(400).json("User doesn't exist")
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteUser = await User.findByIdAndDelete(id)
    return res.status(200).json(deleteUser)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

module.exports = { getUsers, register, login, deleteUser }
