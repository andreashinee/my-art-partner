const Partner = require("../models/partners.model");

module.exports.list = (req, res, next) => {
  Partner.find()
    .then((partners) => res.json(partners))
    .catch((error) => next(error));
};


module.exports.create = (req, res, next) => {
  Partner.create({
    title: req.body.title,
    category: req.body.category,
    location: req.body.location,
    city: req.body.city,
    date: req.body.date,
    duration: req.body.duration,
    picture: req.body.picture,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
  })
  .then((partner) => res.status(201).json(partner))
  .catch(next);
};

module.exports.detail = (req, res, next) => {};

module.exports.update = (req, res, next) => {};

module.exports.delete = (req, res, next) => {};