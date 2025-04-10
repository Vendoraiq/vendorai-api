const express = require('express');
const cors = require('cors'); // <- import cors
const app = express();

app.use(cors()); // <- enable cors
app.use(express.json());

// Your route
app.post('/api', (req, res) => {
  console.log('✅ VendorAI: Product received:', req.body);
  res.json({ message: 'Data received' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ VendorAI API running on port ${PORT}`);
});
