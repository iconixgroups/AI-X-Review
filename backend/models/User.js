const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    interests: {
        type: [String],
        default: []
    },
    history: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        default: []
    },
    notificationPreferences: {
        emailNewsletter: {
            type: Boolean,
            default: false
        },
        pushNotifications: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model('User', UserSchema);