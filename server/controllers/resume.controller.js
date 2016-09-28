const Project = require('../models/resume.model.js')

const getResume = (req, res) => {
  Project.get()
    .then((data) => {
      res.contentType('application/pdf')
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(400).render(err)
    })
}

exports.resume = {
  get: getResume
}
