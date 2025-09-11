import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TransactionItem from "./TransactionItem";
const API_BASE_URL = "http://localhost:5000/api";
function Dashboard({ transactions, onTransactionUpdate }) {
  const [summary, setSummary] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });
  useEffect(() => {
    calculateSummary();
  }, [transactions]);
  const calculateSummary = () => {
    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const balance = income - expenses;

    setSummary({ income, expenses, balance });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      onTransactionUpdate();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="summary-card">
          <h2>Financial Summary</h2>
          <div className="balance">
            Balance:{" "}
            <span
              style={{ color: summary.balance >= 0 ? "#2ecc71" : "#e74c3c" }}
            >
              ${summary.balance.toFixed(2)}
            </span>
          </div>
          <div className="income">Income: ${summary.income.toFixed(2)}</div>
          <div className="expense">
            Expenses: ${summary.expenses.toFixed(2)}
          </div>
        </div>

        <div className="transactions">
          <div className="transactions-header">
            <h2>Recent Transactions</h2>
            <Link to="/add" className="btn">
              <i className="fas fa-plus"></i> Add New
            </Link>
          </div>

          <div className="transaction-list">
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
                onDelete={() => handleDelete(transaction._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
