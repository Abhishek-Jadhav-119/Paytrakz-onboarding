import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTransaction.css'

const AddTransaction = ({ onTransactionAdded }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  
  const [formData, setFormData] = useState({
    projectId: '',
    partyId: '',
    transactionTitle: '',
    transactionItem: '',
    itemQty: 1,
    itemRate: 0,
    unit: '',
    transactionAmount: 0,
    transactionDate: '',
    transactionCategory: '',
    transactionGSTPercentage: 0,
    gstAmount: 0,
    transactionRemarks: '',
    transactionType: '',
    gstInclusion: false,
    refId: ''
  });

  // Update formData when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Auto calculate transactionAmount and gstAmount
  useEffect(() => {
    const { itemQty, itemRate, transactionGSTPercentage } = formData;

    // Calculate transactionAmount and GST Amount automatically
    const totalAmount = itemQty * itemRate;
    const gstAmount = (totalAmount * transactionGSTPercentage) / 100;

    setFormData((prevData) => ({
      ...prevData,
      transactionAmount: totalAmount,
      gstAmount: gstAmount
    }));
  }, [formData.itemQty, formData.itemRate, formData.transactionGSTPercentage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      project: { projectId: formData.projectId },
      party: { partyId: formData.partyId },
      transactionTitle: formData.transactionTitle,
      transactionItem: formData.transactionItem,
      itemQty: formData.itemQty,
      itemRate: formData.itemRate,
      unit: formData.unit,
      transactionAmount: formData.transactionAmount,
      transactionDate: formData.transactionDate,
      transactionCategory: formData.transactionCategory,
      transactionGSTPercentage: formData.transactionGSTPercentage,
      gstAmount: formData.gstAmount,
      transactionRemarks: formData.transactionRemarks,
      transactionType: formData.transactionType,
      gstInclusion: formData.gstInclusion,
      refEntry: { transactionId: formData.refId }
    };

    try {
      const response = await axios.post(
        'https://devback.infobytestechnosys.in/micro/transactions/createTransaction',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
        }
      );
      if (response.status === 201) {
        onTransactionAdded(response.data); // Notify parent component of the new transaction
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
      alert('Error adding transaction');
    }
  };

  return (
    <div className="create-projects-wrapper">
      <form className="create-projects-form" onSubmit={handleSubmit}>
        <div className="header">
          <h2>Add Transaction</h2>
        </div>

        <div className="row">
          <label>Project ID</label>
          <input
            type="text"
            name="projectId"
            value={formData.projectId}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Party ID</label>
          <input
            type="text"
            name="partyId"
            value={formData.partyId}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Transaction Title</label>
          <input
            type="text"
            name="transactionTitle"
            value={formData.transactionTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Transaction Item</label>
          <input
            type="text"
            name="transactionItem"
            value={formData.transactionItem}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Item Quantity</label>
          <input
            type="number"
            name="itemQty"
            value={formData.itemQty}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Item Rate</label>
          <input
            type="number"
            name="itemRate"
            value={formData.itemRate}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Unit</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Transaction Amount</label>
          <input
            type="number"
            name="transactionAmount"
            value={formData.transactionAmount}
            readOnly
          />
        </div>

        <div className="row">
          <label>Transaction Date</label>
          <input
            type="date"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Transaction Category</label>
          <input
            type="text"
            name="transactionCategory"
            value={formData.transactionCategory}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>GST Percentage</label>
          <input
            type="number"
            name="transactionGSTPercentage"
            value={formData.transactionGSTPercentage}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>GST Amount</label>
          <input
            type="number"
            name="gstAmount"
            value={formData.gstAmount}
            readOnly
          />
        </div>

        <div className="row">
          <label>Transaction Remarks</label>
          <textarea
            name="transactionRemarks"
            value={formData.transactionRemarks}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>Transaction Type</label>
          <input
            type="text"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <label>GST Inclusion</label>
          <input
            type="checkbox"
            name="gstInclusion"
            checked={formData.gstInclusion}
            onChange={(e) => handleInputChange({ target: { name: 'gstInclusion', value: e.target.checked } })}
          />
        </div>

        <div className="row">
          <label>Reference ID (Optional)</label>
          <input
            type="text"
            name="refId"
            value={formData.refId}
            onChange={handleInputChange}
          />
        </div>

        <button className="submit-btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
