const express = require('express');
const emails = express.Router();
const sendEmail = require('../utils/sendEmail');
const ErrorResponse = require('../utils/errorResponse');
const db = require('../models');
const { Email } = db;

emails.post('/send', async (req, res, next) => {
  const { to, subject, text, html } = req.body;
  try {
    await sendEmail({ to, subject, text, html });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return next(new ErrorResponse('Failed to send email', 500));
  }
});

// Find all emails
emails.get('/', async (req, res) => {
  try {
    const foundEmails = await Email.findAll();
    res.status(200).json(foundEmails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Find specific email by ID
emails.get('/:id', async (req, res) => {
  try {
    const foundEmail = await Email.findOne({
      where: { id: req.params.id }
    });
    if (foundEmail) {
      res.status(200).json(foundEmail);
    } else {
      res.status(404).json({ error: 'Email not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create an email
emails.post('/', async (req, res) => {
  try {
    console.log("request", req.body)
    const newEmail = await Email.create(req.body);
    res.status(201).json({
      message: 'Successfully created an email',
      data: newEmail
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = emails;
