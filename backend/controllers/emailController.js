
const sendEmail = require('../utils/sendEmail');
const ErrorResponse = require('../utils/errorResponse');

exports.sendEmail = async (req, res, next) => {
  const { to, subject, text, html } = req.body;

  try {
    await sendEmail({ to, subject, text, html });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return next(new ErrorResponse('Failed to send email', 500));
  }
};


