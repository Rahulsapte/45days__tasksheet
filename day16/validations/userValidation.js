// validations/userValidation.js
const Joi = require('joi');

// Registration input validation schema
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.number().integer().min(18).max(60).optional()
});

module.exports = { registerSchema };
