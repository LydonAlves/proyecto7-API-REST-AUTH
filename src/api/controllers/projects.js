const Project = require('../models/projects')

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
    return res.status(200).json(projects)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const getProjectByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const project = await Project.findById(id)
    return res.status(200).json(project)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const getProjectsByCredits = async (req, res, next) => {
  try {
    const { credit } = req.params
    const projects = await Project.find({ minimumCredits: credit })
    return res.status(200).json(projects)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const postProject = async (req, res, next) => {
  try {
    const newProject = new Project(req.body)
    const projectSaved = await newProject.save()
    return res.status(200).json(projectSaved)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const putProject = async (req, res, next) => {
  try {
    console.log('working so far')
    const { id } = req.params
    const oldProject = await Project.findById(id)

    let skillsToUpdate = []
    if (req.body.skills.length > 0) {
      const combinedSkills = oldProject.skills.concat(req.body.skills)
      skillsToUpdate = [...new Set(combinedSkills)]
      console.log(skillsToUpdate)
    } else {
      skillsToUpdate = oldProject.skills
    }

    const updatedFields = {
      ...req.body,
      skills: skillsToUpdate
    }

    const projectUpdated = await Project.findByIdAndUpdate(id, updatedFields, {
      new: true
    })

    return res.status(200).json(projectUpdated)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params
    const projectDeleted = await Project.findByIdAndDelete(id)
    res.status(200).json(projectDeleted)
  } catch (error) {
    return res.status(400).json('Error in the request')
  }
}

module.exports = {
  getProjects,
  getProjectsByCredits,
  getProjectByID,
  postProject,
  putProject,
  deleteProject
}
