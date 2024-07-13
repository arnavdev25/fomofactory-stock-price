const express = require("express");
const router = express.Router();
const stockController = require(`${__dirname}/../controllers/stockController`);


router.get("/stock/prices", stockController.getStockPrices);


module.exports = router;