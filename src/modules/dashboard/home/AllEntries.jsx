import React from 'react';
import './AllEntries.css';

// Image imports (paths to be updated as per your setup)
import addProjectIcon from '../../../assets/icons/addproject.png';
import addDocumentIcon from '../../../assets/icons/adddocument.png';
import addPartyIcon from '../../../assets/icons/addparty.png';
import addUserIcon from '../../../assets/icons/adduser.png';
import addIssueIcon from '../../../assets/icons/addwarning.png';
import addTransactionIcon from '../../../assets/icons/addtransaction.png';



const AllEntries = () => {
  const handleClick = (action) => {
    console.log(`Clicked on ${action}`);
    // Add navigation or functionality as needed
  };

  const entries = [
    { name: 'Add Project', icon: addProjectIcon, action: 'addProject' },
    { name: 'Add Document', icon: addDocumentIcon, action: 'addDocument' },
    { name: 'Add Party', icon: addPartyIcon, action: 'addParty' },
    { name: 'Add User', icon: addUserIcon, action: 'addUser' },
    { name: 'Add Issue', icon: addIssueIcon, action: 'addIssue' },
    { name: 'Add Transaction', icon: addTransactionIcon, action: 'addTransaction' },
  ];

  return (
    <>
   <h1 className='h1'>Add Entry</h1>
    <div className="all-entries-container">
    
      <div className="entries-wrapper">
        {entries.map((entry) => (
          <div
            key={entry.name}
            className="entry-box"
            onClick={() => handleClick(entry.action)}
          >
            <img src={entry.icon} alt={entry.name} className="entry-icon" />
            <p className="entry-text">{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>  );
};

export default AllEntries;
