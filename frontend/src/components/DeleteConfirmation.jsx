
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL =  "http://localhost:5000/api";
function DeleteConfirmation({ onConfirm }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      onConfirm();
      navigate('/');
    } catch (error) {
      console.error('Error deleting transaction:', error);
      setLoading(false);
    }
  };
  return (
    <div className="delete-confirmation">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this transaction? This action cannot be undone.</p>
      <div className="delete-actions">
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/')}
          disabled={loading}
        >
          Cancel
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Yes, Delete'}
        </button>
      </div>
    </div>
  );
}
export default DeleteConfirmation;