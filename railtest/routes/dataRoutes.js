const express = require('express');
const router = express.Router();
const Item = require("../models/item")
const Biler = require("../models/biler")

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

router.get("/biler", async (req, res) => {
  try {
    const bilers = await Biler.find();
    res.json(items);
  }catch (err) {
    console.error("Skibbedy no Cars");
    res.status(500).json({error: "not bil"})
  }
})

module.exports = router;
