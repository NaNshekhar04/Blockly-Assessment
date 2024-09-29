const express = require("express");
const route = express.Router();
const controllers = require("../controllers/traveledDist.controller");

route.get("/", controllers.track);

module.exports = route;