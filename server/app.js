const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const todosRoute = require("./routes/todosRoute");
const fs = require("fs");
const db_file = "./db/todos.json";

const { v4: uuidv4 } = require("uuid");
function Todo(description) {
  this.id = uuidv4();
  this.description = description;
}

app.use(express.json());

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.use("./todos", todosRoute);

app.get("/todos", (req, res) => {
  loadData((todos) => {
    res.json(todos);
  });
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todosArr = list();
  const todoIndex = todosArr.findIndex((todo) => todo.id === id);
  todosArr.splice(todoIndex, 1);
  fs.writeFileSync(db_file, JSON.stringify(todosArr));
  if (todoIndex !== -1) {
    res.json(todosArr[todoIndex]);
  } else {
    res.status(404).json({ message: `todo with id ${id} not found` });
  }
});

app.post("/todos/", (req, res) => {
  console.log(req.body);
  let data = req.body;

  const todosArr = list();
  const todo = new Todo(data.description);
  todosArr.push(todo);
  fs.writeFileSync(db_file, JSON.stringify(todosArr));
  //return todosArr;

  if (!req.body.description) {
    res.status(400).json({
      error: "POST body must contain all requiredProperties",
      requiredProperties: ["description"],
    });
  } else {
    res.json(todo);
  }
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  let data = req.body;

  const todosArr = list();
  const todoIndex = todosArr.findIndex((todo) => todo.id === id);
  todosArr.splice(todoIndex, 1, {
    id: id,
    description: data.description,
  });
  fs.writeFileSync(db_file, JSON.stringify(todosArr));

  if (todoIndex !== -1) {
    res.json(todosArr[todoIndex]);
  } else {
    res.status(404).json({ message: `todo with id ${id} not found` });
  }
});

function loadData(callback) {
  fs.readFile(db_file, (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    callback(todos);
  });
}

function list() {
  const data = fs.readFileSync(db_file);
  return JSON.parse(data);
}

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
