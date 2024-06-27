import React, { useState } from 'react';
import './GiveReviews.css';

function GiveReviews({ doctor, onSubmit }) {
  const [showForm, setShowForm] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({ name: '', review: '', rating: 0 });

    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      onSubmit();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="give-reviews">
      <h2>Give Your Feedback for {doctor.name}</h2>
      {showForm && (
        <form onSubmit={handleSubmit}>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= formData.rating ? 'selected' : ''}`}
                  onClick={() => handleStarClick(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div className="submitted-message">
          <h3>Submitted Message:</h3>
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
