// * Request handler Logic
const Todo = require('../../models/todo');


async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new Todo
        const todo = await Todo.create(req.body);
        console.log(todo);
        res.json(todo);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

async function get(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new Todo
        console.log(req.body.name);
        const todo = await Todo.find({name: req.body.name}).exec();
        console.log(todo);
        res.status(200).json(todo);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = {
    create,
    get
}
