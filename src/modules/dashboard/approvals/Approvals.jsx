import React from 'react';
import SideBar from '../../../SideBar';
import ApprovalCard from '../../../components/cards/ApprovalCard';

const Approvals = () => {
  const cardData = [
    { projectName: 'Laborer', partyName: 'Pranav', date: '20 Sep 2024', status: 'approved' },
    { projectName: 'Laborer', partyName: 'Raj', date: '21 Sep 2024', status: 'pending' },
    { projectName: 'Laborer', partyName: 'Anjali', date: '22 Sep 2024', status: 'rejected' },
    { projectName: 'Laborer', partyName: 'Pranav', date: '23 Sep 2024', status: 'approved' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar with fixed width */}
      <SideBar style={{ width: '250px', minWidth: '250px' }} />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          marginLeft: '20px', // Add margin to create a gap
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: '#FF7D34', marginBottom: '20px' }}>Approvals</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '300px',
            }}
          />
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#FF7D34',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Transactions
          </button>
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#FF7D34',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Investments
          </button>
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#FF7D34',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Projects
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px', // Space between cards
            justifyContent: 'center',
            marginLeft:'50px',
          }}
        >
          {cardData.map((card, index) => (
            <ApprovalCard
              key={index}
              projectName={card.projectName}
              partyName={card.partyName}
              date={card.date}
              status={card.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approvals;
