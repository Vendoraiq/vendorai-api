const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "chrome-extension://blnooiddaimkadcpigegoadmpfkajknm"
];

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
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.options("*", cors(corsOptions)); // Handle preflight for all routes

// Add your routes here
app.post("/api", (req, res) => {
  console.log("✅ API hit with:", req.body);
  res.json({ message: "Received", data: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
