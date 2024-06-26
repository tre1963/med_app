import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = storedDoctorData ? JSON.parse(localStorage.getItem(storedDoctorData.name)) : null;

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && (
        <div className="notification-popup">
          <h3>Appointment Details</h3>
          <p>
            <strong>User:</strong> {username.split('@')[0]} <br />
            <strong>Doctor:</strong> {doctorData?.name} <br />
            <strong>Appointment Date:</strong> {appointmentData.appointmentDate} <br />
            <strong>Time Slot:</strong> {appointmentData.timeSlot}
          </p>
        </div>
      )}
    </div>
  );
};

export default Notification;
