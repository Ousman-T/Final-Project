const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Todo Schema
const todoSchema = new Schema({
    todo: {type: String, required: true},
    todoDetails: { type: String, required: true},
    done: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;