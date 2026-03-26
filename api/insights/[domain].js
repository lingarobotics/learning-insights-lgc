import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { domain } = req.query;

  try {
    const dirPath = path.resolve("public/insights", domain, "insights");

    console.log("DIR PATH:", dirPath);

    if (!fs.existsSync(dirPath)) {
      console.log("❌ Path does not exist");
      return res.status(200).json([]);
    }

    const files = fs.readdirSync(dirPath);
    console.log("FILES:", files);

    const insights = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
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
    console.error("🔥 API CRASH:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}