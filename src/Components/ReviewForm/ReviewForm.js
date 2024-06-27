import React, { useState } from 'react';
import GiveReviews from './GiveReviews';
import './ReviewForm.css';  // Importing CSS file from the same folder

const ReviewForm = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Neurology' },
    { id: 3, name: 'Dr. Brown', specialty: 'Pediatrics' },
  ];

  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState({});

  const handleFeedbackClick = (doctor) => {
    setCurrentDoctor(doctor);
  };

  const handleFeedbackSubmit = (doctorId) => {
    setFeedbackGiven((prev) => ({ ...prev, [doctorId]: true }));
    setCurrentDoctor(null);
  };

  return (
    <div className="review-form">
      <h1>Review Form</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button
                  onClick={() => handleFeedbackClick(doctor)}
                  disabled={!!feedbackGiven[doctor.id]}
                  className="feedback-button"
                >
                  Click Here
                </button>
              </td>
              <td>{feedbackGiven[doctor.id] ? 'Feedback Provided' : 'No Feedback Yet'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentDoctor && (
        <GiveReviews
          doctor={currentDoctor}
          onSubmit={() => handleFeedbackSubmit(currentDoctor.id)}
        />
      )}
    </div>
  );
};

export default ReviewForm;
