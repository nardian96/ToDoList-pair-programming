const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const todosFile = path.join(__dirname, "../db/todos.json");

function Todo(name, description, date) {
  this.id = uuidv4();
  this.name = name;
  this.description = description;
  this.date = date;
}

function list() {
  const data = fs.readFileSync(todosFile);
  return JSON.parse(data);
}

function add(data) {
  const todosArr = list();
  const todo = new Todo(data.id, data.name, data.description, data.date);
  todosArr.push(todo);
  fs.writeFileSync(todosFile, JSON.stringify(todosArr));
  return todosArr;
}

function getByID(id) {
  const todosArr = list();
  return todosArr.filter((todo) => todo.id === id);
}

function deleteTodo(id) {
  const todosArr = list();
  const todoIndex = todosArr.findIndex((todo) => todo.id === id);
  todosArr.splice(todoIndex, 1);
  fs.writeFileSync(todosFile, JSON.stringify(todosArr));
  return todosArr;
}

// update product by id
function updateTodo(id, data) {
  const todosArr = list();
  const todoIndex = todosArr.findIndex((todo) => todo.id === id);
  todosArr.splice(todoIndex, 1, {
    id: id,
    name: data.name,
    description: data.description,
    date: data.date,
  });
  fs.writeFileSync(todosFile, JSON.stringify(todosArr));
  return todosArr;
}

// export multiple functions
module.exports = { list, add, getByID, deleteTodo, updateTodo };
