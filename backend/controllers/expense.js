const ExpenseSchema = require('../models/ExpenseModel')


exports.addExpense = async (req, res) => {
    const { title, amount, description, category, type, date } = req.body

    const expense = new ExpenseSchema({
        title,
        amount,
        description,
        category,
        
        date
    })

    try {
        //validations
        if(!title || !amount || !description || !category || !date){
            return res.status(400).json({msg: 'All fields are required'})
        }
        if (amount < 0 || !amount === 'number') {
            return res.status(400).json({msg: 'Amount cannot be negative'})
        }
        await expense.save()
        res.status(200).json({msg: 'Expense added successfully'})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
            
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find()
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({msg: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({msg: 'Expense deleted successfully'})
        })
        .catch((err) => {
            res.status(500).json({msg: 'Server Error'})
        })
            
}    
