 import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Utilities', 'Entertainment', 'Transport', 'Income', 'Other'],
  },
});

// ✅ Create a model
const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
