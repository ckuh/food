const mongoose = require('mongoose')

const ProjectsSchema = mongoose.Schema({
  title: String,
  about: String,
  keywords: String,
  url: String
})

module.exports = mongoose.model('Projects', ProjectsSchema)
