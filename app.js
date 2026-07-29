const express = require('express')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const { MONGODB_URI, PORT } = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const tasksRouter = require('./controllers/tasks')

const app = express()
mongoose.connect(MONGODB_URI)
    .then((result) => {
        logger.info('success')
    })
    .catch((error) => {
        logger.error('fail')
    })

app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)
app.use('/api/tasks', tasksRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app