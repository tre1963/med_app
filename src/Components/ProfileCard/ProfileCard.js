import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="profile-avatar" />
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
