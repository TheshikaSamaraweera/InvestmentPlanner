const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');  
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense'); 
const { addSaving, getSavings, deleteSaving } = require('../controllers/saving'); 
const { addInvestment, getInvestments, deleteInvestment } = require('../controllers/investment');
const router = require('express').Router()

//Income Routes
router.post('/add-income', addIncome) 
router.get('/get-incomes', getIncomes)
router.delete('/delete-income/:id', deleteIncome)

//Expense Routes
router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpenses)
router.delete('/delete-expense/:id', deleteExpense)

//Saving Routes
router.post('/add-saving', addSaving)
router.get('/get-savings', getSavings)
router.delete('/delete-saving/:id', deleteSaving)

//Investment Routes
router.post('/add-investment', addInvestment)
router.get('/get-investments', getInvestments)
router.delete('/delete-investment/:id', deleteInvestment)

module.exports = router

