const express = require('express');
const router = express.Router();
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



module.exports = router;
