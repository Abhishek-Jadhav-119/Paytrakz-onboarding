import React from 'react';
import './AddEntry.css';
import Add from '../../assets/icons/add.jpg';
import { useNavigate } from 'react-router-dom';

const AddEntry = () => {
  const navigate = useNavigate();

  const handleAddEntryClick = () => {
    navigate('/allentries'); // Navigate to the CreateProjects page
  };

  return (
    <div className="add-entry-wrapper">
      <button className="add-entry" onClick={handleAddEntryClick}>
        <img src={Add} alt="Add Entry" />
        Add Entry
      </button>
    </div>
  );
};

export default AddEntry;
