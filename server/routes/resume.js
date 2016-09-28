const router = require('express').Router()
const controller = require('../controllers/resume.controller.js')

router.get('', controller.resume.get)

module.exports = router
