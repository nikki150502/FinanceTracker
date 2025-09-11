 import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import DeleteConfirmation from "./components/DeleteConfirmation";

const API_BASE_URL = "http://localhost:5000/api";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions`);
      setTransactions(response.data);
    } catch (error) {
      console.error("❌ Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 bg-white shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Header />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-5xl mx-auto px-4 py-6 w-full">
          <Routes>
            {/* Dashboard */}
            <Route
              path="/"
              element={
                <Dashboard
                  transactions={transactions}
                  onTransactionUpdate={fetchTransactions}
                />
              }
            />

            {/* Add Transaction */}
            <Route
              path="/add"
              element={<TransactionForm onSave={fetchTransactions} />}
            />

            {/* Edit Transaction */}
            <Route
              path="/:id/edit"
              element={
                <TransactionForm onSave={fetchTransactions} isEdit={true} />
              }
            />

            {/* Delete Transaction */}
            <Route
              path="/transactions/:id/delete"
              element={<DeleteConfirmation onConfirm={fetchTransactions} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
