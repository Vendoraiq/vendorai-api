const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;

// Replace this with your actual Chrome extension ID
const allowedOrigins = [
  "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm"
];

// CORS config
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Test route for POST
app.post("/api", (req, res) => {
  const product = req.body;
  console.log("✅ Received product:", product);
  res.json({ message: "Product received!", data: product });
});

// Root test
app.get("/", (req, res) => {
  res.send("✅ VendorAI backend is live.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
