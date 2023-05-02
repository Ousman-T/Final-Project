
// * Routing logic


const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');
const Todo = require('../../models/todo')
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const path = require('path');
const app = express();

// * POST
router.post('/orders/new', todosCtrl.create);
router.post('/', todosCtrl.get)

// * Get
router.post('/orders/todos', todosCtrl.get);
router.get('/', todosCtrl.getAllTodos);
router.get('/:id', todosCtrl.getTodoByID);
router.post('/update', todosCtrl.update);
router.post('/delete', todosCtrl.deleteTodo);




// *Update

// ! Delete
// router.delete('/orders/todos', (req, res) => {
//     Todo.findByIdAndRemove(req.params.id, (error, data) => {
//         res.redirect('/orders/todos')
//     })
// })
// * Edit
// router.put('/oders/todos', (req, res) => {
//     Todo.findById(req.params.id, (error, foundTodo) => {
//         res.render('/orders/todos', {todo: foundTodo})
//     })
// })



module.exports = router;