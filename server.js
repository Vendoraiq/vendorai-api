const express = require("express");
const cors = require("cors");

const app = express();

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
  }
}));

app.use(express.json()); // keep this if it's already in your file
