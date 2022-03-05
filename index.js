require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./config/database')
require('./config/passport')
const passport = require('passport')
const Router  = require('./routes/routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

app.use('/api', Router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))