



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL =  "http://localhost:5000/api";
function TransactionForm({ onSave, isEdit = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(isEdit);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Food'
  });
  useEffect(() => {
    if (isEdit && id) {
      fetchTransaction();
    }
  }, [id, isEdit]);
  const fetchTransaction = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions/${id}`);
      const transaction = response.data;
      setFormData({
        title: transaction.title,
        amount: transaction.amount,
        date: transaction.date.split('T')[0],
        category: transaction.category
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transaction:', error);
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || '' : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEdit) {
        await axios.put(`${API_BASE_URL}/transactions/${id}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/transactions`, formData);
      }
      onSave();
      navigate('/');
    } catch (error) {
      console.error('Error saving transaction:', error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="form-container">
      <h2>{isEdit ? 'Edit Transaction' : 'Add New Transaction'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount *</label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transport">Transport</option>
            <option value="Income">Income</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading ? 'Saving...' : (isEdit ? 'Update' : 'Add')} Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
export default TransactionForm;