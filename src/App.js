import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandingPage/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Sign_Up" element={<Sign_Up />} /> {/* Example path for Sign Up */}
          <Route path="/Login" element={<Login />} /> {/* Example path for Login */}
          <Route path="/instant-consultation" element={<InstantConsultation />} /> {/* Example path for Login */}
          <Route path="/booking-consultation" element={<BookingConsultation />} /> {/* Example path for Login */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;