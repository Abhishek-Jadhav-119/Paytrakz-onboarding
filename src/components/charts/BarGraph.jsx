import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { baseUrl } from "./../../Constants"; // Import baseUrl from constants.js

// Temporary dummy authController
const authController = {
  authToken: {
    value: "dummyAuthToken12345", // Replace with the actual token in the future
  },
};

const BarGraph = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API response with mock data
        const mockData = {
          transactions: [
            {
              transactionDate: "2024-11-01",
              transactionAmount: 500,
              projectedAmount: 700,
            },
            {
              transactionDate: "2024-11-02",
              transactionAmount: 800,
              projectedAmount: 900,
            },
            {
              transactionDate: "2024-11-01",
              transactionAmount: 500,
              projectedAmount: 700,
            },
            {
              transactionDate: "2024-11-03",
              transactionAmount: 300,
              projectedAmount: 600,
            },
            {
              transactionDate: "2024-11-02",
              transactionAmount: 800,
              projectedAmount: 900,
            },
          ],
        };

        // Format data for the bar chart
        const formattedData = mockData.transactions.map((transaction) => ({
          name: transaction.transactionDate || "Unknown Date", // Adjust field to match your API
          invested: transaction.transactionAmount || 0, // Ensure fallback if data is missing
          projected: transaction.projectedAmount || 0, // Ensure fallback if data is missing
        }));

        setSalesData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div
      style={{
        width: "600px",
        height: "280px",
        backgroundColor: "#f9f3e6",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "auto",
        marginTop: "2px",
        top: "69px",
        right: "133px",
      }}
    >
      <h4
        style={{
          color: "#ff6a00",
          textAlign: "left",
          marginBottom: "1px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Monthly Invested & Projections
      </h4>
      <ResponsiveContainer>
        <BarChart
          data={salesData}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="square"
            wrapperStyle={{
              fontSize: "12px",
              paddingLeft: "20px",
            }}
          />
          <Bar dataKey="invested" fill="#ff6a00" barSize={20} />
          <Bar dataKey="projected" fill="#56c400" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
