const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const api = require('./routes/api')
const home = require('./routes/home')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', home)
app.use('/api', api)

mongoose
  .connect(process.env.DB_URI || 'mongodb://localhost/my-db')
  .then(() => console.log('connected to database'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening to port ${port}`))
