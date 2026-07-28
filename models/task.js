const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    content: { type: String, required: true, minlength: 3 },
    done: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
})

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id =
            returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Task', taskSchema)