const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to our expense tracker app'
    });
});

// Controller routes
const expensesRouter = require('./controllers/expense_Controller'); 
app.use('/expenses', expensesRouter);

// Mock API endpoint for balance
app.get('/balance', (req, res) => {
    const mockBalance = {
        accountNumber: '123456789',
        balance: 829.25,
        currency: 'USD'
    };
    res.json(mockBalance);
});

// AddEmail route
app.post('/api/send', (req, res) => {
  const { to, subject, text, html } = req.body;
  // Logic to send email (e.g., using nodemailer)
  res.json({ message: 'Email sent successfully' });
});


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
