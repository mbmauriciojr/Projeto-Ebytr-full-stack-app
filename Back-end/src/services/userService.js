const User = require('../models/userModel');

const Schema = require('../utils/schema');
const tokenJWT = require('../middleware/auth/validateJWT');

const create = async (body) => {
  const { error } = Schema.User.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const newUser = await User.create(body);

  const token = tokenJWT.createToken(newUser.body);

  return { status: 201, data: { user: newUser, token } };
};

const login = async (body) => {
  const { email, password } = body;

  const checkEmail = await User.findEmail(email);

  if (!checkEmail || checkEmail.password !== password) return { status: 400, message: 'Invalid fields' };

  const token = tokenJWT.createToken(checkEmail);

  return { status: 200, data: { token } };
};

module.exports = {
  create,
  login,
};
