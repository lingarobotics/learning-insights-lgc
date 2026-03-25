const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const INSIGHTS_PATH = path.join(__dirname, "../../insights");

// GET all frontend insights (example)
router.get("/frontend", (req, res) => {
  const dirPath = path.join(INSIGHTS_PATH, "frontend", "insights");

  try {
    const files = fs.readdirSync(dirPath);

    const insights = files.map(file => ({
      title: file,
      path: `/insights/frontend/${file}`
    }));

    res.json(insights);
  } catch (err) {
    res.status(500).json({ error: "Failed to read insights" });
  }
});

module.exports = router;