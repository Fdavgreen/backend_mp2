const express = require('express');
const router = express.Router();
const emailController = require('../backend/controllers/emailController');
const authMiddleware = require('../backend/middleware/authMiddleware');

// Route to send an email
router.post('/send', authMiddleware, emailController.sendEmail);

module.exports = router;  // Export the router