const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, description, category, type, date } = req.body;

  const income = new IncomeSchema({
    title,
    type,
    amount,
    description,
    category,
    date,
  });
  console.log(income);

  try {
    //validations
    if (!title || !amount || !description || !category || !date) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (amount < 0 || !amount === "number") {
      return res.status(400).json({ msg: "Amount cannot be negative" });
    }
    console.log(income);
    await income.save();
    res.status(200).json({ msg: "Income added successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const income = await IncomeSchema.find();
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ msg: "Income deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Server Error" });
    });
};

exports.updateIncome = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedIncome = await IncomeSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedIncome) {
      return res.status(404).json({ msg: "Income not found" });
    }

    return res
      .status(200)
      .json({ msg: "Income updated successfully", income: updatedIncome });
  } catch (err) {
    console.error("Error updating income:", err);
    return res.status(500).json({ msg: "Server Error" });
  }
};
