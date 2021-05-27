const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const AuthController = require("../controllers/auth.controller");

// register
router.post("/", UserController.register);
// login
router.post("/login", UserController.login);
// logout
router.post("/logout", UserController.logout);
// 
router.get("/auth", AuthController.getAuth);

module.exports = router;
