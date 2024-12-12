import React from 'react';

const ApprovalCard = ({ projectName, partyName, date, status }) => {
  const statusColors = {
    approved: '#4CAF50',
    pending: '#FFA500',
    rejected: '#FF4D4D',
  };

  return (
    <div
      style={{
        border: `1px solid ${statusColors[status]}`,
        borderRadius: '10px',
        padding: '20px',
        width: '240px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ color: '#FF7D34', marginBottom: '10px' }}>Project Updated</h3>
      <p style={{ margin: '5px 0' }}>
        <strong>Project name:</strong> {projectName}
      </p>
      <p style={{ margin: '5px 0' }}>
        <strong>Party:</strong> {partyName}
      </p>
      <p style={{ margin: '5px 0' }}>
        <strong>Date:</strong> {date}
      </p>
      <p style={{ margin: '5px 0', color: statusColors[status] }}>
        <strong>Status:</strong> {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
      <button
        style={{
          marginTop: '10px',
          padding: '10px 15px',
          backgroundColor: statusColors[status],
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        View Updates
      </button>
    </div>
  );
};

export default ApprovalCard;
