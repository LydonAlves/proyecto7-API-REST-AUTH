const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    minimumCredits: { type: Number, required: true },
    skills: [{ type: mongoose.Types.ObjectId, ref: 'skills' }]
  },
  {
    timestamps: true,
    collection: 'projects'
  }
)

const Project = mongoose.model('projects', projectSchema, 'projects')

module.exports = Project
