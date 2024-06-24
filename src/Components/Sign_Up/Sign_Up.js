import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                }),
            });
            const json = await response.json();
            if (response.ok) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('phone', phone);
                sessionStorage.setItem('email', email);
                navigate('/'); // Redirect to home page
                window.location.reload();
            } else {
                setShowError(json.error || 'Registration failed');
            }
        } catch (error) {
            setShowError('Registration failed. Please try again later.');
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="container">
            <div className="signup-grid">
                <div className="signup-form">
                    <form onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                required
                            />
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                                Reset
                            </button>
                        </div>
                    </form>
                    {showError && <div className="error-message">{showError}</div>}
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
