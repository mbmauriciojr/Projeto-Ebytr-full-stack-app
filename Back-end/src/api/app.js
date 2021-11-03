const express = require('express');
const bodyParser = require('body-parser');

const Tasks = require('../controllers/taskController');
const Users = require('../controllers/userController');

const app = express();
app.use(bodyParser.json());

app.post('/task', Tasks.create);

app.post('/user', Users.create);

module.exports = app;
