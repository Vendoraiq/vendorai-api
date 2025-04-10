const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;

// Update this with your actual extension ID
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
  credentials: true,
}));

app.use(bodyParser.json());

// ✅ This is the endpoint your extension is trying to call
app.post("/api", (req, res) => {
  const messageData = req.body;
  console.log("VendorAI: Sent to backend");
  console.log("Product received:", messageData);

  res.json({
    success: true,
    data: messageData,
    message: "Product received by backend"
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
