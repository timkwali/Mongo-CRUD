const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    timestamp: {
        type: Number,
        required: true
    }
})

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo