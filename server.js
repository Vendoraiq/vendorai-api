const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// Allow only your Chrome extension to access
const allowedOrigin = 'chrome-extension://blnooiddaimkadcpigegoadmpfkajknm';

app.use(cors({
  origin: allowedOrigin,
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(bodyParser.json());

// Define your endpoint
app.post('/api', (req, res) => {
  console.log('✅ VendorAI: Sent to backend');
  const { title, price, rating } = req.body;

  res.json({
    message: '✅ Product received!',
    title,
    price,
    rating
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
