const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// todo routers
router.get('/', todosController.listTodos);
router.post('/', todosController.addTodo);
router.get('/:id', todosController.getTodosByID);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

//export routes
module.exports = router;
