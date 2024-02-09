const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getSkills,
  getSkillByID,
  postSkill,
  putSkill,
  deleteSkill,
  getSkillBySkillType
} = require('../controllers/skills')

const skillsRouter = require('express').Router()

skillsRouter.get('/:id', [isAuth], getSkillByID)
skillsRouter.get('/skillType/:skill', [isAuth], getSkillBySkillType)
skillsRouter.get('/', [isAuth], getSkills)
skillsRouter.post('/', [isAdmin], postSkill)
skillsRouter.put('/:id', [isAdmin], putSkill)
skillsRouter.delete('/:id', [isAdmin], deleteSkill)

module.exports = skillsRouter
