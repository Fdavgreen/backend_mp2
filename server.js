const express = require('express');
const app = express();
const dotenv = require('dotenv');
const expensesRouter = require('./controllers/expense_Controller'); 
// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to our expense tracker app'
    });
});

// expenses routes
app.use('/expenses', expensesRouter);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
