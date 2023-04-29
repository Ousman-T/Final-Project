
// * Routing logic


const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const path = require('path');
const app = express();

// * POST
router.post('/orders/new', todosCtrl.create);

// * Get
router.get('/orders/todos', todosCtrl.get)



module.exports = router;