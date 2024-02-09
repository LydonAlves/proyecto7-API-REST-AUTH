const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  deleteUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/', [isAdmin], getUsers)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.delete('/:id', [isAdmin], deleteUser)

module.exports = { usersRouter }
