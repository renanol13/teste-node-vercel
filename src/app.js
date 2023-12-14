const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./dataBase/connection')
db()

app.use(express.json())
app.use(cors())
//routes
const routes = require('./routers/persons')

app.use('/',routes)

module.exports = app