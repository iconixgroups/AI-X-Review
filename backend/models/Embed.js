const mongoose = require('mongoose');

const EmbedSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    embedType: {
        type: String,
        enum: ['video', 'demo', 'presentation', 'tweet'],
        required: true
    },
    embedLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Embed', EmbedSchema);