const express = require('express');
const router = express.Router();
const Movie = require("../models/movie"); // ✅ Import the correct model

// GET movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().limit(10);
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err.message);
    res.status(500).json({ error: 'Could not fetch movies' });
  }
});

module.exports = router;
