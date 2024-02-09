const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    credits: { type: Number, required: true },
    skillType: {
      type: String,
      required: true,
      enum: ['fundamental', 'core', 'elective']
    }
  },
  {
    timestamps: true,
    collection: 'skills'
  }
)

const Skill = mongoose.model('skills', skillSchema, 'skills')

module.exports = Skill
