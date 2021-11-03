const express = require('express');
const bodyParser = require('body-parser');

const Tasks = require('../controllers/taskController');
const Users = require('../controllers/userController');

const validateJWT = require('../middleware/auth/validateJWT').verifyToken;

const app = express();
app.use(bodyParser.json());

app.post('/login', Users.login);

app.post('/user', Users.create);
app.get('/user/:id', Tasks.getTaskByUser);

app.post('/task', validateJWT, Tasks.create);
app.put('/task/:id', validateJWT, Tasks.update);

module.exports = app;
