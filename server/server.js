const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// path to insights folder (from server → root → insights)
const INSIGHTS_PATH = path.join(__dirname, "../insights");

// helper function to read files
const getInsights = (category) => {
  const dirPath = path.join(INSIGHTS_PATH, category, "insights");

  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);

  return files.map((file) => ({
    title: file.replace(".md", ""),
    file,
    category,
  }));
};

// API routes

app.get("/api/insights/:category", (req, res) => {
  try {
    const { category } = req.params;

    const data = getInsights(category);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch insights" });
  }
});

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});