const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  Image_url: String,
  Price: Number,
  Address: String,
  Region: String,
  Bedroom_num: Number,
  Bathroom_num: Number,
  Square_footage: String,
  Description: String,
  Mortgage: Number,
  New: Boolean,
  Price_change: Number,
})

const similarListings = mongoose.model('SimilarListings', listingSchema);
const nearbyListings = mongoose.model('NearbyListings', listingSchema);

module.exports = {similarListings, nearbyListings}