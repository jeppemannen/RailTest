const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  value: Number,
}, { collection: 'item' }); // <-- this forces it to use the correct collection name

module.exports = mongoose.model('Item', ItemSchema);
