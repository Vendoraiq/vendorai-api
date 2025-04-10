const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // 👈 allow all origins (for now, safe for development)
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.post('/api', (req, res) => {
  console.log("Product received:", req.body);
  res.status(200).json({ message: 'Data received by backend' });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON from requests
app.use(express.json());

// ✅ Route to receive product data
app.post('/api', (req, res) => {
  console.log('✅ Product data received:', req.body);
  res.status(200).send('✅ Data received successfully');
});

// Basic homepage for testing
app.get('/', (req, res) => {
  res.send('VendorAI API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
