const Joi = require('joi');

const User = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(8).required(),
});

module.exports = {
  User,
};
