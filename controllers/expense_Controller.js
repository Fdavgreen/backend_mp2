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
        res.status(500).json({ error: error.message });
    }
});

// Find specific by ID
expenses.get('/:id', async (req, res) => {
    try {
        const foundExpense = await Expense.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundExpense)
    } catch (error) {
        res.status(500).json(error)
    }
})

// create an expense
expenses.post('/', async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted an expense',
            data: newExpense
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// update an expense
expenses.put('/:id', async (req, res) => {
    try {
        const updatedExpense = await Expense.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedExpense} expense(s)`
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// delete expense
expenses.delete('/:id', async (req, res) => {
    try {
        const deletedExpenses = await Expense.destroy({
            where: {
                id:req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedExpenses} expense(s)`
        })
    }catch(err) {
        res.status(500).json(err)
    }
})

module.exports = expenses;
