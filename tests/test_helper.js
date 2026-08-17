const Task = require('../models/task')

const initialTasks = [
    {
        content: "study Node.js",
        done: false,
        priority: "high"
    },
    {
        content: "study HTML5",
        done: true,
        priority: "low"
    },
    {
        content: "study CSS3",
        done: false,
        priority: "medium"
    }
]

const tasksInDb = async () => {
    const loadedTask = await Task.find({})
    return loadedTask.map(task => task.toJSON())
}

module.exports = { initialTasks, tasksInDb }