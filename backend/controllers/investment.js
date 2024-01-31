const InvestmentSchema = require('../models/InvestmentModel')


exports.addInvestment = async (req, res) => {
    const { title, amount, description, category, type, date } = req.body

    const saving = new InvestmentSchema({
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
        await saving.save()
        res.status(200).json({msg: 'Investment added successfully'})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
            
}

exports.getInvestments = async (req, res) => {
    try {
        const investment = await InvestmentSchema.find()
        res.status(200).json(investment)
    } catch (error) {
        res.status(500).json({msg: 'Server Error'})
    }
    
}

exports.deleteInvestment = async (req, res) => {
    const {id} = req.params;
    InvestmentSchema.findByIdAndDelete(id)
        .then((investment) => {
            res.status(200).json({msg: 'Investment deleted successfully'})
        })
        .catch((err) => {
            res.status(500).json({msg: 'Server Error'})
        })
            
}    
