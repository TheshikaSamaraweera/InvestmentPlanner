const IncomeSchema = require('../models/IncomeModel')


exports.addIncome = async (req, res) => {
    const { title, amount, description, category, type, date } = req.body

    const income = new IncomeSchema({
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
        await income.save()
        res.status(200).json({msg: 'Income added successfully'})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
            
}

exports.getIncomes = async (req, res) => {
    try {
        const income = await IncomeSchema.find()
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({msg: 'Server Error'})
    }
    
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({msg: 'Income deleted successfully'})
        })
        .catch((err) => {
            res.status(500).json({msg: 'Server Error'})
        })
            
}   


