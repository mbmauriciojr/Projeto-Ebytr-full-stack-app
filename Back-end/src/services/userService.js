const User = require('../models/userModel');

const Schema = require('../utils/schema');

const create = async (body) => {
  const { error } = Schema.User.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newUser = await User.create(body);

  return { status: 201, data: newUser };
};

module.exports = {
  create,
};
