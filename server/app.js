const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const todosRoute = require("./routes/todosRoute");
const fs = require("fs");

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

function loadData(callback) {
  fs.readFile("./db/todos.json", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    callback(todos);
  });
}

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
