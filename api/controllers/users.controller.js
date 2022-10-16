const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  User.create({
    name: req.body.name,
    city: req.body.city,
    age: req.body.age,
    city: req.body.city,
    alterego: req.body.alterego,
    repertoire: req.body.repertoire,
    picture: req.body.picture,
    description: req.body.description,
    band: req.body.band,
    song: req.body.song,
    book: req.body.book,
    ilustrator: req.body.ilustrator,
  })
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Show.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "Show not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
c
    },
    {
      new: true,
      runValidarors: true,
    }
  )
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "Show not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelate(req.params.id)
    .then((user) => {
      if (user) {
        res.status(204).send();
      } else {
        next(createError(404, "Show not found"));
      }
    })
    .catch(next);
};
