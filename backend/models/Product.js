const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teamDetails: {
    type: Array,
    required: true
  },
  fundingInfo: {
    type: String,
    required: true
  },
  releaseHistory: {
    type: Array,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  useCases: {
    type: Array,
    required: true
  },
  integrations: {
    type: Array,
    required: true
  },
  pricing: {
    type: String,
    required: true
  },
  relatedArticles: {
    type: Array,
    required: true
  },
  relatedVideos: {
    type: Array,
    required: true
  },
  relatedTweets: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);