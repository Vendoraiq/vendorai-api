const cors = require("cors");
const express = require("express");
const app = express();

// Allow requests only from your Chrome Extension
const allowedOrigins = [
  "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));
