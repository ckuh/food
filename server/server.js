const express = require('express')
const RRM = require('./helper/RRM.js')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParse = require('body-parser')
const routes = require('./routes/routes.js').routes
require('./db/db')

const app = express()
app.set('port', process.env.PORT || 1337)

dotenv.load()
app.use(cors())
app.use(bodyParse.json())

// routes
app.use('/projects', routes.projects)
app.use('/resume', routes.resume)

app.use('/public', express.static('./public'))

app.use(RRM)

console.log('Listening on port ', app.get('port'))
app.listen(app.get('port'))
