const express = require("express");
const router = express.Router();
const controller = require("../controllers/logs.controller");

router.post("/log", controller.createLog);
router.get("/logs", controller.getLogs);

module.exports = router;
