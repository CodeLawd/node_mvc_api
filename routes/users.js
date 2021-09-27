const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.get);
router.post("/", userControllers.post);
router.get("/profile", userControllers.profile);
router.get("/login", userControllers.login_get);
router.post("/login_post", userControllers.login_post);
router.get("/dashboard", userControllers.dashboard)

module.exports = router;
