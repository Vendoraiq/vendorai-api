const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Allowed origin (your extension)
const allowedOrigins = [
  "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm"
];

// ✅ Configure CORS middleware
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests from your extension and allow local testing (no origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

// ✅ Middleware setup
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON in requests

// ✅ Your main API route for Chrome extension
app.post("/api", (req, res) => {
  console.log("VendorAI: Sent to backend");
  console.log("Product received:", req.body);

  // Send dummy response back to extension
  res.json({ message: "Received product successfully!", data: req.body });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
