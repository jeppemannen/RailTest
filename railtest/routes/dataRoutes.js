const express = require('express');
const router = express.Router();
const Item = require("../models/item");

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = router;
