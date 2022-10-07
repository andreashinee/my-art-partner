const Partner = require("../models/partners.model");

module.exports.list = (req, res, next) => {
  Partner.find()
    .then((partners) => res.json(partners))
    .catch((error) => next(error));
};


module.exports.create = (req, res, next) => {
  Partner.create(req.body)
  .then((partner) => res.status(201).json(partner))
  .catch(next);
};

module.exports.detail = (req, res, next) => {};

module.exports.update = (req, res, next) => {};

module.exports.delete = (req, res, next) => {};