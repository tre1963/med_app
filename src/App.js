import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandingPage/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
//import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/Landing_Page" element={<Landing_Page />} />
            <Route path="/Sign_Up" element={<Sign_Up />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/instant-consultation" element={<InstantConsultation />} /> */}
            <Route path="/booking-consultation" element={<BookingConsultation />} />
        
          <Route path="/Reviews" element={<ReviewForm />} />
          <Route path="/profile" element={<ProfileCard />} />
           <Route path='/reports' element={<ReportsLayout />} /> 

          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;