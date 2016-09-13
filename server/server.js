require('babel-register')

const express = require('express')
const port = process.env.PORT || 1337
const RRM = require('./helper/RRM.js')

const app = express()

app.use('/public', express.static('./public'))

app.use(RRM)

console.log('Listening on port ', port)
app.listen(port)
