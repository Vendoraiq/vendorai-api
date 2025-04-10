const express = require('express');
const cors = require('cors'); // <== Add this line

const app = express();
app.use(cors()); // <== Add this line
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/api', (req, res) => {
  console.log("Data received:", req.body);
  res.status(200).json({ message: "Data received" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
