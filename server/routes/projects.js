const router = require('express').Router()
const controller = require('../controllers/projects.controller.js')

router.get('', controller.projects.get)

module.exports = router
