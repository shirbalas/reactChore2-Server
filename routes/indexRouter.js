const { Router }  = require("express");
const orderRouter = require("./OrderRouter");
const productsRouter = require("./ProductRouter");
const router = Router();

router.use("/order", orderRouter);
router.use("/products", productsRouter);

module.exports = router;