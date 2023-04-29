
// * Routing logic


const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const path = require('path');
const app = express();

// * POST
router.post('/', todosCtrl.create);

app.post('/orders/new', (req, res) => {
    console.log(req.body)
})



module.exports = router;