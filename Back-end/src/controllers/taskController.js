const Task = require('../services/taskService');

const create = async (req, res) => {
  const { id } = req.user.data;

  const { status, data } = await Task.create(req.body, id);

  return res.status(status).json(data);
};

module.exports = {
  create,
};
