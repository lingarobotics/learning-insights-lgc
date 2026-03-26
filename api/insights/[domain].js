import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { domain } = req.query;

  try {
    // ✅ FIXED PATH (IMPORTANT)
    const dirPath = path.join(
      process.cwd(),
      "client",
      "public",
      "insights",
      domain,
      "insights"
    );

    console.log("DIR PATH:", dirPath);

    if (!fs.existsSync(dirPath)) {
      return res.status(500).json({
        error: "Insights directory not found",
        path: dirPath,
      });
    }

    const files = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".md"))
      .sort((a, b) => b.localeCompare(a));

    console.log("FILES:", files);

    const insights = files.map((file) => {
      const filePath = path.join(dirPath, file);

      let content = "";
      try {
        content = fs.readFileSync(filePath, "utf-8");
      } catch (err) {
        console.error("READ ERROR:", err);
      }

      return {
        title: file.replace(".md", ""),
        category: domain,
        content,
      };
    });

    return res.status(200).json(insights);
  } catch (err) {
    console.error("API CRASH:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}