import React from 'react';
import '../CSS/Profile.css';

const Profile = () => {
  // Hardcoded user data for demonstration
  const userData = {
    username: 'mech',
    contact: '6368495758',
    address: '123, lineddll, Blvd',
  };

  return (
    <div className="profile">
      <div className="profile-content">
        <h2>User Profile</h2>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Contact:</strong> {userData.contact}
        </p>
        <p>
          <strong>Address:</strong> {userData.address}
        </p>
      </div>
    </div>
  );
};

export default Profile;
