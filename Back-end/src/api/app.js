const express = require('express');
const bodyParser = require('body-parser');

const Tasks = require('../controllers/taskController');

const app = express();
app.use(bodyParser.json());

app.post('/task', Tasks.create);

module.exports = app;
