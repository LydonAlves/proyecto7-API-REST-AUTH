const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    userName: { type: String, required: false },
    password: { type: String, required: true },
    yearOfBirth: { type: Number, trim: true, required: false },
    rol: {
      type: String,
      trim: true,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    },
    profileImage: { type: String, trim: true, required: false }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')

module.exports = User
