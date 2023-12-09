import React, { useState } from 'react';  // Ensure that you import React only once
import '../CSS/Profile.css';

const Profile = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  // Hardcoded user data for demonstration
  const userData = {
    name: 'John Doe',
    contact: '123-456-7890',
    address: '123 Main St, Cityville',
  };

  return (
    <div className={`profile ${isProfileOpen ? 'profile-open' : ''}`}>
      <button className="profile-button" onClick={toggleProfile}>
        Profile
      </button>
      {isProfileOpen && (
        <div className="profile-content">
          <h2>User Profile</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Contact:</strong> {userData.contact}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
