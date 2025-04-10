const express = require('express');
const cors = require('cors'); // ✅ add this
const app = express();

app.use(cors()); // ✅ allow all origins by default (can restrict later)
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/api', (req, res) => {
  console.log('✅ Data received:', req.body);
  res.json({ message: 'Data received successfully!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
