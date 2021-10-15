const express = require('express')
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})