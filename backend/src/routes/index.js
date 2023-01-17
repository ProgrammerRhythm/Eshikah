const authRoutes = require("./auth.route");
const router = require("express").Router();

router.use("/auth", authRoutes);
module.exports = router;
