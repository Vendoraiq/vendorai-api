// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Add this route to receive data from the Chrome extension
app.post('/api/save', (req, res) => {
  const { title, price } = req.body;

  console.log('Received product:', { title, price });

  // Send success response back to the extension
  res.json({ message: 'Data received successfully!', data: { title, price } });
});

// Optional: for testing Render is working
app.get('/', (req, res) => {
  res.send('VendoraIQ backend is running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
