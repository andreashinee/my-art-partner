const createError = require("http-errors");
const RegisterUser = require("../models/registerUser.model");

module.exports.register = (req, res, next) => {
  const { email } = req.body;
  RegisterUser.findOne({ email })
    .then((registerUser) => {
      if (registerUser) {
        next(
          createError(400, {
            message: "User validation failed",
            errors: { email: "User is already registered" },
          })
        );
      } else {
        console.log(req.body)
        return RegisterUser.create(req.body).then((registerUser) =>
          res.status(201).json(registerUser)
        );
      }
    })
    .catch(next);
};

module.exports.authenticate = (req, res, next) => {
  function invalidAuthError() {
    next(
      createError(400, {
        message: "User validation failed",
        errors: { email: "Invalid email or password" },
      })
    );
  }

  const { email, password } = req.body;
  console.log(req.body)
  RegisterUser.findOne({ email })
    .then((registerUser) => {
      if (!registerUser) {
        invalidAuthError();
      } else {
        return registerUser.checkPassword(password).then((match) => {
          console.log('match', match)
          if (match) {
            req.session.userId = registerUser.id;
            res.status(201).json(registerUser);
          } else {
            invalidAuthError();
          }
        });
      }
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  req.status(204).send();
}

//grabación 3 - 32:43
