const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;

// 🔐 Allow requests from your Chrome extension
const corsOptions = {
  origin: "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// 🚀 Your test endpoint
app.post("/api", (req, res) => {
  console.log("✅ VendorAI: Sent to backend");
  console.log("📦 Product received:", req.body);

  res.json({ success: true, received: req.body });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
