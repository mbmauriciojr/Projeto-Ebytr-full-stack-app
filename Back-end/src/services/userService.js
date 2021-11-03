const User = require('../models/userModel');

const create = async (body) => {
  const newUser = await User.create(body);

  return { status: 201, data: newUser };
};

module.exports = {
  create,
};
