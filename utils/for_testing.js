const taskCompleted = (tasks) => {
    return tasks.filter(t => t.done === true).length
}

module.exports = taskCompleted