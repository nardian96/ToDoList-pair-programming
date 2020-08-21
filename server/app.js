const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;
const todosRoute = require('./routes/todosRoute');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.send('<h1>Hello Express</h1>');
});

app.use('./todos', todosRoute);

app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:{PORT}`));
