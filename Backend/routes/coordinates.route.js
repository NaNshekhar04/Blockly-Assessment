const express = require("express");
const router = express.Router();
const controllers = require("../controllers/coordinates.controller.js")

router.get("/", controllers.getCoordinates);


module.exports = router;