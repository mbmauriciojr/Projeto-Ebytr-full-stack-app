const Task = require('../services/taskService');

const create = async (req, res) => {
  const { _id } = req.user.data;

  const { status, data, message } = await Task.create(req.body, _id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

const getTaskByUser = async (req, res) => {
  const { id } = req.params;

  const { status, data, message } = await Task.getTaskByUser(id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Task.update(req.body, id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const { status, data, message } = await Task.deleteTask(id);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  create,
  getTaskByUser,
  update,
  deleteTask,
};
