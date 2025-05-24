const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // ✅ allow all origins
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    mongoose.connection.once('open', () => {
      console.log('Connected to DB:', mongoose.connection.name);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/items', require('./routes/dataRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
