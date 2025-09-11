  import React from "react";
import { Link, useNavigate } from "react-router-dom";

function TransactionItem({ transaction }) {
  const navigate = useNavigate();

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
    <div className="transaction-item flex justify-between items-center p-4 bg-white rounded-lg shadow mb-3">
      
      {/* Transaction Info */}
      <div className="transaction-info">
        <div className="transaction-title font-semibold text-gray-800">
          {transaction.title}
        </div>
        <div className="transaction-meta text-sm text-gray-500">
          <span>{formatDate(transaction.date)}</span> | <span>{transaction.category}</span>
        </div>
      </div>

      {/* Amount */}
      <div
        className="transaction-amount font-bold text-lg"
        style={{ color: transaction.amount >= 0 ? "#2ecc71" : "#e74c3c" }}
      >
        {transaction.amount >= 0 ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
      </div>

      {/* Actions */}
      <div className="transaction-actions flex gap-2">
        {/* Edit Button */}
        <Link
          to={`/${transaction._id}/edit`}
          className="action-btn edit-btn px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Edit
        </Link>

        {/* Delete Button navigates to DeleteConfirmation page */}
        <button
          onClick={() => navigate(`/transactions/${transaction._id}/delete`)}
          className="action-btn delete-btn px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
