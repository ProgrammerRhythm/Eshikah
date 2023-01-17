const routes = require("../routes");
const router = require("express").Router();

router.get("/api/status", (_req, res) => {
  res
    .status(200)
    .json({ success: true, status: "running", message: "server is running" });
});

router.use("/api", routes);
module.exports = router;
