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

// * Get All Todos
async function getAllTodos(req, res){
    try{
        const todos = await Todo.find({})
        return res.json(todos)
    } catch (errors){
        return res.status(500).json({error: error.toSring()});
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
    const{_id, todoDetails} = req.body
   const todo = Todo.findByIdAndUpdate(_id, {todoDetails})
    .then(() => {
        console.log("Todo Updated");
        res.status(200).json(todo);
    })
    .catch((error) => console.error(error))
}
// * Delete Logic
async function deleteTodo(req, res){
    const {_id} = req.body
    const todo = Todo.findByIdAndDelete(_id)
    .then(() => {
        console.log("Todo Deleted");
        res.status(200).json(todo);
    })
    .catch((error) => console.error(error))
}

// * Get todos by ID
async function getTodoByID(req, res){
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: 'Todo Not Found'})
        }
        return res.json(todo)
    } catch (error){
        return res.status(500).json({error: error.toSring()})
    }
}

module.exports = {
    create,
    get,
    deleteTodo,
    update,
    getAllTodos,
    getTodoByID
}
