const router = require("express").Router();
const StoreController = require("../controllers/store.controller");

// Editing store
router.put("/", StoreController.editStore);

// Get user's store
router.get("/", StoreController.getStore);

module.exports = router;
