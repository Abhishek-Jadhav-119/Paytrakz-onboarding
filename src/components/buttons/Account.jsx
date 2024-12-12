import React from 'react';
import Profile from '../../assets/icons/Profile.png'; // Path to your account icon
import './Account.css'; // Import the CSS file for styles

const Account = () => {
  return (
    <div className="account-icon">
      <img src={Profile} alt="Account Icon" />
    </div>
  );
};

export default Account;
