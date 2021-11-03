const Task = require('../models/taskModel');

const Schema = require('../utils/schema');

const create = async (body, userId) => {
  const { error } = Schema.Task.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newTask = await Task.create(body, userId);

  return { status: 201, data: newTask };
};

module.exports = {
  create,
};
