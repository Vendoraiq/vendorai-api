const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 👇 new route for your extension
app.post('/api/save', (req, res) => {
  console.log('Received data from extension:', req.body);
  res.status(200).json({ message: 'Data received successfully!' });
});

// Optional: root route for basic test
app.get('/', (req, res) => {
  res.send('Hello from the Vendorai API!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
