require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const projectsRouter = require('./src/api/routes/projects')
const skillsRouter = require('./src/api/routes/skills')
const { usersRouter } = require('./src/api/routes/users')

const app = express()
app.use(express.json())

connectDB()

app.use('/api/v1/projects', projectsRouter)
app.use('/api/v1/skills', skillsRouter)
app.use('/api/v1/users', usersRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
