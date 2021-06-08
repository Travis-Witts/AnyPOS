const router = require("express").Router();
const { createPaymentIntent } = require('../controllers/payment.controller');

router.post("/", createPaymentIntent);


module.exports = router;