const router = require("express").Router();

router.get("/health", (_req, res) => {
  res
    .status(200)
    .json({ success: true, status: "running", message: "server is running" });
});

module.exports = router;
