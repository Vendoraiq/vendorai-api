const express = require('express');
const cors = require('cors'); // ✅ Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ Enable CORS for all routes
app.use(express.json()); // ✅ Parse incoming JSON

app.get('/', (req, res) => {
  res.send('VendorAI API is running');
});

app.post('/api', (req, res) => {
  console.log("✅ Product received:", req.body);
  res.status(200).send('Product received!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
