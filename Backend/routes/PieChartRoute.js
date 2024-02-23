const express = require("express");
const Piechart = express.Router();
const { PieChartController } = require("../controllers/PieChart.Cotroller");
Piechart.get("/piechart", PieChartController);
module.exports = { Piechart };
