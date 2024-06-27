import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({ name: '', phone: '', email: '' });
  const [updatedDetails, setUpdatedDetails] = useState({ name: '', phone: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem('auth-token');
    if (!authtoken) {
      navigate('/login');
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem('auth-token');
      const email = sessionStorage.getItem('email');
      if (!authtoken) {
        navigate('/login');
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            'Authorization': `Bearer ${authtoken}`,
            'Email': email,
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          throw new Error('Failed to fetch user profile');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem('auth-token');
      const email = sessionStorage.getItem('email');
      if (!authtoken || !email) {
        navigate('/login');
        return;
      }
      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authtoken}`,
          'Content-Type': 'application/json',
          'Email': email,
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        sessionStorage.setItem('name', updatedDetails.name);
        sessionStorage.setItem('phone', updatedDetails.phone);
        setUserDetails(updatedDetails);
        setEditMode(false);
        alert('Profile Updated Successfully!');
        navigate('/');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-card">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={updatedDetails.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={updatedDetails.email}
              disabled
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={updatedDetails.phone}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <img src={userDetails.avatar || 'https://via.placeholder.com/50'} alt={`${userDetails.name}'s avatar`} className="profile-avatar" />
          <div className="profile-info">
            <h2>{userDetails.name}</h2>
            <p>
              <b>Email:</b>{' '}
              <span className="hint" onClick={() => alert(`User's Email: ${userDetails.email}`)}>
                {userDetails.email}
              </span>
            </p>
            <p>
              <b>Phone:</b> {userDetails.phone}
            </p>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
