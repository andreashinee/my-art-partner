const Partner = require("../models/partners.model");

module.exports.list = (rep, res, next) => {
  Partner.find()
    .then((partners) => res.jason(partners))
    .catch((error) => next(error));
};
