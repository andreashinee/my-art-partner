const express = require("express");
const router = express.Router();
const shows = require("../controllers/shows.controller");
const users = require("../controllers/users.controller");
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");
const showMid = require("../middlewares/shows.mid");

router.post("/register", auth.register);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);

router.get("/shows", secure.isAuthenticated, shows.list);
router.post("/shows", secure.isAuthenticated, shows.create);
router.get("/shows/:id", shows.detail);
router.patch("/shows/:id", secure.isAuthenticated, showMid.isOwnedByUser, shows.update);
router.delete("/shows/:id", secure.isAuthenticated, showMid.isOwnedByUser, shows.delete);



//

router.get("/users", secure.isAuthenticated, users.list);
router.post("/users", secure.isAuthenticated, users.create);
router.get("/users/:id", users.detail);
router.patch("/users/:id", secure.isAuthenticated, showMid.isOwnedByUser, users.update);
router.delete("/users/:id", secure.isAuthenticated,showMid.isOwnedByUser,  users.delete);

module.exports = router;
