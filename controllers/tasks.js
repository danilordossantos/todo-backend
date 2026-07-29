const express = require('express')
const Task = require('../models/task')

const tasksRouter = express.Router()

tasksRouter.get('/', async (request, response) => {
    const tasks = await Task.find({})
    response.json(tasks)
})

tasksRouter.post('/', async (request, response) => {
    const tasks = request.body
    const task = new Task({
        content: tasks.content,
        done: tasks.done,
        priority: tasks.priority
    })
    const savedTask = await task.save()
    response.status(201).json(savedTask)
})

tasksRouter.get('/:id', async (request, response) => {
    const tasks = await Task.findById(request.params.id)

    if (tasks !== null) {
        response.json(tasks)
    } else {
        response.status(404).end()
    }
})

tasksRouter.put('/:id', async (request, response) => {
    const tasks = await Task.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
    response.json(tasks)
})

tasksRouter.delete('/:id', async (request, response) => {
    const tasks = await Task.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = tasksRouter