const express = require("express");
const cors = require("cors");
const app = express();

// Replace this with your actual Chrome Extension ID
const extensionOrigin = "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm";

// Configure CORS for extension origin
app.use(
  cors({
    origin: extensionOrigin,
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle extension requests
app.post("/api", (req, res) => {
  const { url, html } = req.body;

  if (!url || !html) {
    return res.status(400).json({ error: "Missing url or html content" });
  }

  // Example logic (can be replaced with real data processing)
  const dummyData = {
    title: "Mock Product Title",
    price: "$19.99",
    source: url,
  };

  res.json(dummyData);
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
