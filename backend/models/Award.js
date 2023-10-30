const mongoose = require('mongoose');

const AwardSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Award', AwardSchema);