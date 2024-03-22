const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getProjectsByCredits,
  getProjects,
  postProject,
  getProjectByID,
  putProject,
  deleteProject
} = require('../controllers/projects')

const projectsRouter = require('express').Router()

projectsRouter.get('/credits/:minimumCredits', [isAuth], getProjectsByCredits)
projectsRouter.get('/:id', [isAuth], getProjectByID)
projectsRouter.get('/', [isAuth], getProjects)
projectsRouter.post('/', [isAdmin], postProject)
projectsRouter.put('/:id', [isAdmin], putProject)
projectsRouter.delete('/:id', [isAdmin], deleteProject)

module.exports = projectsRouter
