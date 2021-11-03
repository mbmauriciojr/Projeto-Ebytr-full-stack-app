const User = require('../services/userService');

const create = async (req, res) => {
  const { status, data } = await User.create(req.body);

  return res.status(status).json(data);
};

module.exports = {
  create,
};
