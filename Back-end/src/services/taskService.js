const Task = require('../models/taskModel');

const create = async (body, userId) => {
  const newTask = await Task.create(body, userId);

  return { status: 201, data: newTask };
};

module.exports = {
  create,
};
