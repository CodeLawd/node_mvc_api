const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.get);
// router.get("/profile", adminControllers.profile);

module.exports = router;
