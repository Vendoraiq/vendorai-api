// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Endpoint for saving product info
app.post('/api/save', (req, res) => {
    const { title, price } = req.body;

    if (!title || !price) {
        return res.status(400).json({ message: 'Missing title or price' });
    }

    console.log('✅ Product received:', { title, price });

    // You can add logic here to store in DB, spreadsheet, etc.
    res.status(200).json({ message: 'Data received successfully', received: { title, price } });
});

// Root route (optional for testing)
app.get('/', (req, res) => {
    res.send('VendoraIQ API is live 🚀');
});

app.listen(PORT, () => {
    console.log(`🟢 Server running on port ${PORT}`);
});
