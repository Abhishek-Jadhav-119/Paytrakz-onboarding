import React from 'react';
import Bell from '../../assets/icons/Bell.png';
import './Notification.css'; // Import the CSS file for styles

const Notification = () => {
  return (
    <div className="notification-icon">
      <img src={Bell} alt="Notification Icon" />
    </div>
  );
};

export default Notification;
