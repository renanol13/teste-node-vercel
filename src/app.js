const express = require('express')
const app = express()
const db = require('./dataBase/connection')
db()

app.use(express.json())

//routes
const routes = require('./routers/persons')

app.use('/',routes)

module.exports = app