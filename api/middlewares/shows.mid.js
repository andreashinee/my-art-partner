const Show = require('../models/show.model');
const createError = require('http-errors');

module.exports.isOwnedByUser = (req, res, next) => {
  const { id } = req.params;
  Show.findById(id)
  .then(show => {
    if(show?.author == req.registerUser?.id) {
      req.show = show;
      next();
    } else if (show) {
      next(createError(403),'Nooo, thats not possiblee')
    }else {
      next(createError(404), 'show not found')   
    }
  })
  .catch(next)
}