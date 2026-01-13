const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🏥 HospiTrack API is running!');
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    message: 'HospiTrack API is working'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});