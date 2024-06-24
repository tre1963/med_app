import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem("name");

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy
                    {/* SVG icon */}
                </Link>
                <span>.</span>
            </div>
            <div className="nav__icon">
                <i className="fa fa-times fa fa-bars"></i>
            </div>
            <ul className="nav__links active">
                <li className="link">
                    <Link to="/LandingPage">Home</Link>
                </li>
                {/* Other navbar links */}
                <li className="link">
                    <Link to="/Appointments">Appointments</Link>
                </li>
                <li className="link">
                    <Link to="/HealthBlog">Health Blog</Link>
                </li>
                <li className="link">
                    <Link to="/Reviews">Reviews</Link>
                </li>
                {/* Display user's name and logout button if logged in */}
                {userName &&
                    <>
                        <li className="link">
                            <span>Welcome, {userName.split('@')[0]}</span> {/* Extracting name from email */}
                        </li>
                        <li className="link">
                            <button className="btn1" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                }
                {/* Display sign up and login buttons if not logged in */}
                {!userName &&
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
                }
            </ul>
        </nav>
    );
};

export default Navbar;
