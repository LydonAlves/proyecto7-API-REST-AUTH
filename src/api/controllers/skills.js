const Skill = require('../models/skills')

const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find()
    return res.status(200).json(skills)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const getSkillByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const skill = await Skill.findById(id)
    return res.status(200).json(skill)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const getSkillBySkillType = async (req, res, next) => {
  try {
    const { skill } = req.params
    const skills = await Skill.find({ skillType: skill })
    return res.status(200).json(skills)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const postSkill = async (req, res, next) => {
  try {
    const newSkill = new Skill(req.body)
    const skillSaved = await newSkill.save()
    return res.status(201).json(skillSaved)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const putSkill = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSkill = new Skill(req.body)
    newSkill._id = id
    const skillUpdated = await Skill.findByIdAndUpdate(id, newSkill, {
      new: true
    })
    return res.status(200).json(skillUpdated)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const deleteSkill = async (req, res, next) => {
  try {
    const { id } = req.params
    const skillDeleted = await Skill.findByIdAndDelete(id)
    res.status(200).json(skillDeleted)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

module.exports = {
  getSkills,
  getSkillByID,
  postSkill,
  putSkill,
  deleteSkill,
  getSkillBySkillType
}
