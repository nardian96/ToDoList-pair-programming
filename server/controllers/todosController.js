const todos = require("../models/todosModel");

function listTodos(_req, res) {
  res.json(todos.list());
}

function getTodosByID(req, res) {
  res.json(todos.getByID(req.params.id));
}

function addTodo(req, res) {
  if (
    !req.body.id ||
    !req.body.title ||
    !req.body.description ||
    !req.body.date
  ) {
    res.status(400).send({
      error: "Post body must contain all requiredProperties",
      requiredProperties: ["id", "title", "descrition", "date"],
    });
  }
  res.json(todos.add(req.body));
}

function deleteTodo(req, res) {
  res.json(todos.deleteTodo(req.params.id));
}

function updateTodo(req, res) {
  res.json(todos.updateTodo(req.params.id, req.body));
}

module.exports = {
  listTodos,
  addTodo,
  getTodosByID,
  deleteTodo,
  updateTodo,
};
