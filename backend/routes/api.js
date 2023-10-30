const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const User = require('../models/User');
const Review = require('../models/Review');
const Team = require('../models/Team');
const Award = require('../models/Award');
const Embed = require('../models/Embed');
const Issue = require('../models/Issue');

// Fetch product details
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'PRODUCT_FETCH_FAILURE', error: err });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            res.json({ message: 'USER_LOGIN_SUCCESS', user });
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (err) {
        res.status(400).json({ message: 'USER_LOGIN_FAILURE', error: err.message });
    }
});

// Post a review
router.post('/review', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.json({ message: 'REVIEW_POST_SUCCESS', review });
    } catch (err) {
        res.status(500).json({ message: 'REVIEW_POST_FAILURE', error: err });
    }
});

// Report an issue
router.post('/issue', async (req, res) => {
    try {
        const issue = new Issue(req.body);
        await issue.save();
        res.json({ message: 'ISSUE_REPORT_SUCCESS', issue });
    } catch (err) {
        res.status(500).json({ message: 'ISSUE_REPORT_FAILURE', error: err });
    }
});

module.exports = router;