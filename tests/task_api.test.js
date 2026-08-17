const { test, describe, beforeEach, after } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const Task = require('../models/task')
const { initialTasks, tasksInDb } = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
    await Task.deleteMany({})
    await Task.insertMany(initialTasks)
})

describe('GET /api/tasks', () => {
    test('returns tasks as json', async () => {
        await api
        .get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
    test('returns all tasks', async () => {        
        const response = await api.get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        assert.strictEqual(response.body.length, initialTasks.length)
    })
})

after(async () => {
    await mongoose.connection.close()
})