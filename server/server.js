const express = require('express')
const RRM = require('./helper/RRM.js')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParse = require('body-parser')
const routes = require('./routes/routes.js').routes
require('./db/db')

const port = process.env.PORT || 1337
const app = express()

dotenv.load()
app.use(cors())
app.use(bodyParse.json())

// routes
app.use('/projects', routes.projects)

app.use('/public', express.static('./public'))

app.use(RRM)

console.log('Listening on port ', port)
app.listen(port)
