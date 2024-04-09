const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  console.log(req.body);
  const { title, amount, description, category, type, date } = req.body;

  const expense = new ExpenseSchema({
    title,
    type,
    amount,
    description,
    category,
    date,
  });

  try {
    //validations
    if (!title || !amount || !description || !category || !date) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (amount < 0 || !amount === "number") {
      return res.status(400).json({ msg: "Amount cannot be negative" });
    }
    await expense.save();
    res.status(200).json({ msg: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ msg: "Expense deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Server Error" });
    });
};

exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedExpense = await ExpenseSchema.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    return res
      .status(200)
      .json({ msg: "Expense updated successfully", expense: updatedExpense });
  } catch (err) {
    console.error("Error updating expense:", err);
    return res.status(500).json({ msg: "Server Error" });
  }
};
