const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    sentiment: {
        type: String,
        enum: ['Positive', 'Neutral', 'Negative'],
        required: true
    }
});

module.exports = mongoose.model('Review', ReviewSchema);