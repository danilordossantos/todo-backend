const { test, describe } = require('node:test')
const assert = require('node:assert')
const taskCompleted = require('../utils/for_testing')

describe('tasks completed', () => {
    test('returns 0 if no tasks are completed', () => {
        const tasks = [
            { done: false },
            { done: false }
        ]
        const result = taskCompleted(tasks)
        assert.strictEqual(result, 0)
    })

    test('returns the correct count when some tasks are completed', () => {
        const tasks = [
            { done: true },
            { done: true },
            { done: false },
            { done: false },
            { done: false }
        ]
        const result = taskCompleted(tasks)
        assert.strictEqual(result, 2)
    })
})