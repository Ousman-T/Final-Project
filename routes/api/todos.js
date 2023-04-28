// * Routing logic

const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// * POST
router.post('/', todosCtrl.create);


module.exports = router;