const User = require('../services/userService');

const create = async (req, res) => {
  const { status, data, message } = await User.create(req.body);

  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  create,
};
