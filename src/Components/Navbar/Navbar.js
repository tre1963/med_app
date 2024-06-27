import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from '../ProfileCard/ProfileCard';
import ReportsLayout from '../ReportsLayout/ReportsLayout'; // Adjust path if necessary

import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem("name");

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon">
                <i className="fa fa-times fa fa-bars"></i>
            </div>
            <ul className="nav__links">
                <li className="link">
                    <Link to="/LandingPage">Home</Link>
                </li>
                <li className="link">
                    <Link to="/appointment-form">Appointments</Link>
                </li>
                <li className="link">
                    <Link to="/booking-consultation">Booking Consultation</Link>
                </li>
                <li className="link">
                    <Link to="/HealthBlog">Health Blog</Link>
                </li>
                <li className="link">
                    <Link to="/Reviews">Reviews</Link>
                </li>
                <li className="link welcome-user" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>Welcome, {userName} <i className={`fa ${dropdownOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i></span>
                    {dropdownOpen && (
                        <ul className="navbar-dropdown">
                            <li>
                                <Link to="/profile">Your Profile</Link>
                            </li>
                            <li>
                                <Link to="/reports">Your Reports</Link>
                            </li>
                        </ul>
                    )}
                </li>
                {userName ? (
                    <li className="link">
                        <button className="btn1" onClick={handleLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/Sign_Up">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/Login">
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
