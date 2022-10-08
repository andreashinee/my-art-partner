const Partner = require("../models/partners.model");
const createError = require("http-errors");

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

module.exports.detail = (req, res, next) => {
  Partner.findById(req.params.id)
    .then((partner) => {
      if (partner) {
        res.json(partner);
      } else {
        next(createError(404, "Partner not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Partner.findByIdAndUpdate(
    req.params.id,
    {
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
    },
    {
      new: true,
      runValidarors: true,
    }
  )
    .then((partner) => {
      if (partner) {
        res.json(partner);
      } else {
        next(createError(404, "Partner not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Partner.findByIdAndDelate(req.params.id)
    .then((partner) => {
      if (partner) {
        res.status(204).send();
      } else {
        next(createError(404, "Partner not found"));
      }
    })
    .catch(next);
};
