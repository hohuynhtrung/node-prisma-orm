const express = require("express");
const authController = require("@/controllers/auth.controller");
const authRequired = require("@/middlewares/authRequire");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);

router.get("/me", authRequired, authController.getCurrentUser);

module.exports = router;
