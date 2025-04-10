const cors = require('cors');

// Allow extension explicitly
const corsOptions = {
  origin: ['chrome-extension://<your-extension-id>'], // Replace with your real extension ID
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
