const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows.controller");
const users = require("../controllers/users.controller");

router.get("/shows", shows.list);
router.post('/shows', shows.create);
router.get('/shows/:id', shows.detail);
router.patch('/shows/:id', shows.update);
router.delete('/shows/id', shows.delete);


router.get("/users", users.list);
router.post('/users', users.create);
router.get('/users/:id', users.detail);
router.patch('/users/:id', users.update);
router.delete('/users/id', users.delete);



module.exports = router;
