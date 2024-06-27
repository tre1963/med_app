import React, { useState } from 'react';
import GiveReviews from './GiveReviews';

const ReviewForm = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Neurology' },
    { id: 3, name: 'Dr. Brown', specialty: 'Pediatrics' },
  ];

  const [currentDoctor, setCurrentDoctor] = useState(null);

  const handleFeedbackClick = (doctor) => {
    setCurrentDoctor(doctor);
  };

  return (
    <div>
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
                <button onClick={() => handleFeedbackClick(doctor)} style={{ color: 'blue' }}>
                  Click Here
                </button>
              </td>
              <td>{currentDoctor && currentDoctor.id === doctor.id ? 'Feedback Provided' : 'No Feedback Yet'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentDoctor && <GiveReviews doctor={currentDoctor} />}
    </div>
  );
};

export default ReviewForm;
