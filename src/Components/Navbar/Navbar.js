// Import necessary libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Define the Navbar component
const Navbar = () => {

  // State variables for managing UI elements and user data
  const [click, setClick] = useState(false); // Tracks menu click state for responsiveness
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const [username, setUsername] = useState(""); // Stores username if logged in
  const [email, setEmail] = useState(""); // Stores email (might not be used)
  const [showDropdown, setShowDropdown] = useState(false); // Tracks dropdown menu visibility (potential future use)

  // Function to handle menu button click - toggles menu visibility
  const handleClick = () => setClick(!click);

  // Function to handle user logout - removes session storage and reloads page
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData"); // Remove doctor data from local storage (potential future use)
    setIsLoggedIn(false);
    // setUsername(""); // Optional: Reset username on logout

    // Clear review forms from local storage (potential future use)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail(''); // Reset email state (might not be used)
    window.location.reload();
  };

  // Function to handle potential future dropdown menu (currently unused)
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // useEffect hook to check for stored login information on component mount
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
      console.log("Navbar isLoggedIn: ", isLoggedIn)
      setUsername(storedEmail);
      console.log("Navbar UserName: ", username)
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  useEffect(() => {
    // Check if the user is already logged in
    const storedUsername = sessionStorage.getItem("name");

    if (storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
    }
    console.log("Navbar UserName2: ", username)
}, []);

  // Return the JSX for the Navbar component
  return (
    <nav>
      <div className="nav__logo">
        {/* Link to home page with logo and icon */}
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>

      {/* Hamburger menu icon for mobile responsiveness */}
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {/* Navigation links */}
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/booking-consultation">Appointments</Link>
        </li>
         <li className="link">
                    <Link to="/booking-consultation">Booking Consultation</Link>
                </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {/* Conditional rendering of login/logout */}
        {isLoggedIn ? (
                    <>
                        <li onClick={handleDropdown} className="link welcome-user">
                            <p>
                                Welcome, {username}
                            </p>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/profile">Your Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/reports">Your Reports</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_Up">
                {/* Sign Up button */}
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                {/* Login button */}
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
