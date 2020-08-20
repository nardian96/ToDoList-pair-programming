const express = require('express');
const { default: todosController } = require('../controllers/todosController');
const router = express.Router();

// todo routers
router.get('/', todosController.listTodos);
router.post('/', todosController.addTodo);
router.get('/:id', todosController.gitTodoByID);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

//export routes
module.export = router;
