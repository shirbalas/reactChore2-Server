const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orderController");

router.get("/all", ordersController.getAll);

router.post("/new", ordersController.createOrder);

module.exports = router;
