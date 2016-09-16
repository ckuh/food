const router = require('express').Router()
const controller = require('../controllers/projects.controller.js')

router.get('', controller.projects.get)
router.post('', controller.projects.post)

module.exports = router
