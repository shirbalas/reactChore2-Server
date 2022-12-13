const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/all", productsController.getAll);

module.exports = router;