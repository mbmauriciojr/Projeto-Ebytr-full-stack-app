const { ObjectId } = require('mongodb');

const Task = require('../models/taskModel');

const Schema = require('../utils/schema');

const create = async (body, userId) => {
  const { error } = Schema.Task.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newTask = await Task.create(body, userId);

  return { status: 201, data: newTask };
};

const getTaskByUser = async (userId) => {
  if (!ObjectId.isValid(userId)) return { status: 404, message: 'Invalid user' };

  const getTask = await Task.getByUser(userId);

  return { status: 200, data: getTask };
};

const update = async (body, id) => {
  const { error } = Schema.Task.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const updateTask = await Task.update(body, id);

  if (!updateTask) return { status: 404, message: 'Task not found' };

  return { status: 200, data: updateTask };
};

const deleteTask = async (id) => {
  const deletedTask = await Task.deleteTask(id);

  if (!deletedTask) return { status: 404, message: 'Task not found' };

  return { status: 204, data: 'Task deleted with success' };
};

module.exports = {
  create,
  getTaskByUser,
  update,
  deleteTask,
};
