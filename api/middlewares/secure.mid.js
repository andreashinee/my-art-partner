const createError = require('http-errors')

module.exports.isAuthenticated = (req, res, next) => {
  if(req.registerUser){
    next()
  } else {
    next(createError(401))
  }
}