const createError = require('http-errors');
const RegisterUser = require('../models/registerUser.model');

module.exports.register = (req, res, next) => {
  const { email } = req.body;
  RegisterUser.findOne({ email })
  .then((registerUser) => {
    if (registerUser) {
      next(400, { message: 'User validation failed',  errors: { email: {message: 'User is already registered'} }})
    } else {
      return RegisterUser.create(req.body)
      .then(registerUser => res.status(201).json(registerUser))
    }
  }) 
  .catch(next)
}