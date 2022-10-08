const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows.controller");

router.get("/shows", shows.list);
router.post('/shows', shows.create);
router.get('/shows/:id', shows.detail);
router.patch('/shows/:id', shows.update);
router.delete('/shows/id', shows.delete);

module.exports = router;
