const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")// ✅ Import the correct model
const Item = require("../models/item")

// GET all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error('Error fetching items:', err.message);
    res.status(500).json({ error: 'Could not fetch items' });
  }
});


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
