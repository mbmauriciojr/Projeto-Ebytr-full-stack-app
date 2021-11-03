const Joi = require('joi');

const User = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(8).required(),
});

const Task = Joi.object({
  taskName: Joi.string().min(8).required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = {
  User,
  Task,
};
