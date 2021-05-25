const router = require("express").Router();
const UserController = require("../controllers/user.controller");

// register
router.post("/", UserController.register);
// login
router.post("/login", UserController.login);
// logout
router.post("/logout", UserController.logout);

module.exports = router;
