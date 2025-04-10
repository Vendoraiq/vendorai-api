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
