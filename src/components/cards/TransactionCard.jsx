// TransactionCard.jsx
import React from "react";
import "./TransactionCard.css";

const TransactionCard = ({
  projectName,
  party,
  amount,
  date,
  status,
  remarks,
}) => {
  const getStatusClass = () => {
    switch (status) {
      case "Pending":
        return "pending";
      case "Approved":
        return "approved";
      case "Declined":
        return "declined";
      default:
        return "";
    }
  };

  return (
    <div className={`transaction-card ${getStatusClass()}`}>
      <h3>{projectName}</h3>
      <p>Party: {party}</p>
      <p>Amount: ₹{amount}</p>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
      <p>Remarks: {remarks}</p>
    </div>
  );
};

export default TransactionCard;
