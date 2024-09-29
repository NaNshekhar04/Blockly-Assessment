const express = require("express");
const route = express.Router();
const controllers = require("../controllers/add.controller");

route.post("/", controllers.addCoordinates);

module.exports = route;