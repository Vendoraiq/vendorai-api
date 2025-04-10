const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Handle POST requests from the Chrome Extension
app.post('/api', (req, res) => {
  const data = req.body;
  console.log('✅ Product data received:', data);
  res.status(200).json({ message: '✅ Data received' });
});

// Optional: health check route
app.get('/', (req, res) => {
  res.send('VendorAI API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 VendorAI API is listening on port ${PORT}`);
});
