import React, { useEffect, useState } from "react";
import axios from "axios";
// import AddTransaction from "../../../components/forms/AddTransaction";
// import TransactionCard from "../../../components/cards/TransactionCard";

const Transactions = ({ authToken, projectId }) => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions on component mount
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "https://devback.infobytestechnosys.in/micro/transactions/getMyAllProjectTransaction",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Add new transaction to the list
  const handleTransactionAdded = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <AddTransaction
        onTransactionAdded={handleTransactionAdded}
        authToken={authToken}
        projectId={projectId}
      />
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
