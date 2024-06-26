import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem("name");

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
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
            <ul className="nav__links active">
                <li className="link">
                    <Link to="/LandingPage">Home</Link>
                </li>
                <li className="link">
                    <Link to="/appointment-form">Appointments</Link>
                </li>
                 <li className="link">
                    <Link to="/instant-consultation">Booking Consultation </Link>
                </li>
                
                <li className="link">
                    <Link to="/HealthBlog">Health Blog</Link>
                </li>
                <li className="link">
                    <Link to="/Reviews">Reviews</Link>
                </li>
                {userName ? (
                    <>
                        <li className="link">
                            <span>Welcome, {userName}</span>
                        </li>
                        <li className="link">
                            <button className="btn1" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
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
