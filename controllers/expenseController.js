const express = require('express');
const expenses = express.Router();
const db = require('../models');
const { Expense } = db;  

// Find all expenses
expenses.get('/', async (req, res) => {
    try {
        const foundExpenses = await Expense.findAll();
        res.status(200).json(foundExpenses);
    } catch (error) {
        res.status(500).json(error);
    }
});

// create an expense
expenses.post('/', async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted an expense',
            data: newExpense
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = expenses;
