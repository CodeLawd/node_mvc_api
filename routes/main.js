const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("*", mainController.error);

module.exports = router;
