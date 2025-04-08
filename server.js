const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example secured route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'VendorAI API is live!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
