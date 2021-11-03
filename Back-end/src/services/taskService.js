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

  return { status: 201, data: getTask };
};

module.exports = {
  create,
  getTaskByUser,
};
