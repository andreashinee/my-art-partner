const Show = require("../models/show.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Show.find()
    .populate("author", "name email")
    .then((shows) => res.json(shows))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const show = req.body;
  delete show.likes;
  delete show.attendees;
  show.author = req.registerUser.id;

  Show.create(show)
    .then((show) => res.status(201).json(show))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Show.findById(req.params.id)
    .populate("author", "name email")
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
  const data = req.body;
  delete data.likes;
  delete data.attendees;
  delete data.author;

  const show = Object.assign(req.show, data);
  show.save()
    .then((show) => res.json(show))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Show.deleteOne({ _id: req.show.id})
.then(() => res.status(204).send())
.catch(next);
};
