const sendEmail = require('../utils/sendEmail');

exports.registerUser = async (req, res) => {
  try {
    // Registration logic here
    
    // Send a welcome email
    await sendEmail({
      to: user.email,
      subject: 'Welcome to Expense Tracker',
      text: 'Thank you for registering!',
      html: '<p>Thank you for registering!</p>',
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};