const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm"
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Your existing routes below here...
