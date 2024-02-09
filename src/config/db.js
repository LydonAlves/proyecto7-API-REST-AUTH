const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Database connected successfully')
  } catch (error) {
    console.log('Error in the database connection')
  }
}

module.exports = { connectDB }
