const mongoose = require('mongoose');

// Use an empty schema if you just want to read all fields
const MovieSchema = new mongoose.Schema({}, { collection: 'movies' });

module.exports = mongoose.model('Movie', MovieSchema);
