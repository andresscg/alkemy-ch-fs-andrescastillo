require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./config/database')
const Router  = require('./routes/routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', Router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))