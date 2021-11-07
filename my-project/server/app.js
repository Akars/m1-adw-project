const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const apiRouter = require('./routes/api.js')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))

app.use('/api/', apiRouter)
app.listen(8080)

module.exports = app
