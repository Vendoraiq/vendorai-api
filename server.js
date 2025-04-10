const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Define the exact origin of your Chrome Extension
const allowedOrigin = "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm";

// ✅ Set strict CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// ✅ API endpoint
app.post("/api", (req, res) => {
  console.log("✅ VendorAI: Sent to backend");
  console.log("📦 Product received:", req.body);
  res.json({ status: "success", received: req.body });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
