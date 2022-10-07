const express = require("express");
const router = express.Router();
const partners = require("../controllers/partners.controller");

router.get("/partners", partners.list);
router.post('/partners', partners.create);
router.get('/partners/:id', partners.detail);
router.patch('/partners/:id', partners.update);
router.delete('/partners/id', partners.delete);

module.exports = router;
