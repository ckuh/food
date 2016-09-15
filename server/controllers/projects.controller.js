const model = require('../models/projects.model.js')

const getProjects = (req, res) => {
  model.projects.get()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

exports.projects = {
  get: getProjects
}
