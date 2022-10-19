const Show = require("../models/show.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Show.find()
    .then((shows) => res.json(shows))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  Show.create({
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
    .then((show) => res.status(201).json(show))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Show.findById(req.params.id)
    .then((show) => {
      if (show) {
        res.json(show);
      } else {
        next(createError(404, "Show not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Show.findByIdAndUpdate(
    //findOneAndUpdate
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
    .then((show) => {
      if (show) {
        res.json(show);
      } else {
        next(createError(404, "Show not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Show.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(next);
};
