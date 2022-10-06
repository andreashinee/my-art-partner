const express = require("express");
const router = express.Router();
const partners = require("../controllers/partners.controller");

router.get("/partners", partners.list);

module.exports = router;
