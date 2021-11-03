const User = require('../models/userModel');

const Schema = require('../utils/schema');
const tokenJWT = require('../middleware/auth/validateJWT');

const create = async (body) => {
  const { error } = Schema.User.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newUser = await User.create(body);
  const token = tokenJWT.createToken(newUser);

  return { status: 201, data: { user: newUser, token } };
};

module.exports = {
  create,
};
