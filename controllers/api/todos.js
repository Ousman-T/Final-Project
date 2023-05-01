// * Request handler Logic
const Todo = require('../../models/todo');

// * Create Logic
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
//* Read Logic
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
// * Update Logic
async function update(req, res){
    const{_id, text} = req.body
    Todo.findByIdAndUpdate(_id, {text})
    .then(() => {
        console.log("Todo Updated");
        res.redirect('/')
    })
}
// * Delete Logic
async function deleteTodo(req, res){
    const {_id} = req.body
    Todo.findByIdAndDelete(_id)
    .then(() => {
        console.log("Todo Deleted");
        res.redirect('/')
    })
    .catch((error) => console.error(error))
}

module.exports = {
    create,
    get,
    deleteTodo
}
