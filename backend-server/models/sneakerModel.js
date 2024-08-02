const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
}, {
  timestamps: true
});

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker;
