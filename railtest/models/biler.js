const mongoose = require('mongoose');

const bilerScheme = new mongoose.Schema({
  name: String,
  value: Number,
}, { collection: 'biler' }); // <-- this forces it to use the correct collection name

module.exports = mongoose.model('Biler', bilerScheme);
