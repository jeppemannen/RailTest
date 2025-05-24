const express = require('express');
const router = express.Router();
const Item = require("../models/item");

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error('Error fetching items:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().limit(10); // limit to avoid long load times
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err.message);
    res.status(500).json({ error: 'Could not fetch movies' });
  }
});

module.exports = router;
