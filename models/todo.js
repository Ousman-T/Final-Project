const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Todo Schema
const todoSchema = new Schema({
    todoName: {type: String, required: true},
    todoDetails: { type: String, required: true},
    done: Boolean,
    userName: {type: String, required: true}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;