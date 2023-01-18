const authController = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/login", authController.loginController);
router.post("/register", authController.registerController);
module.exports = router;
