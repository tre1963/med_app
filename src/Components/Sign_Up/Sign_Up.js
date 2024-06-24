import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

const Sign_Up = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required.";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone number must be exactly 10 digits.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
            isValid = false;
        }

        if (!formData.password.trim()) {
            tempErrors.password = "Password is required.";
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully", formData);
            // Perform your form submission logic here
        }
    };

    return (
        <div className="container">
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1">
                    Already a member? <span><Link to="/login" style={{ color: "#2190FF" }}>Login</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                className="form-control" 
                                placeholder="Enter your name" 
                                aria-describedby="helpId" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                required 
                                className="form-control" 
                                placeholder="Enter your phone number" 
                                aria-describedby="helpId" 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required 
                                className="form-control" 
                                placeholder="Enter your email" 
                                aria-describedby="helpId" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                required 
                                className="form-control" 
                                placeholder="Enter your password" 
                                aria-describedby="helpId" 
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ name: "", phone: "", email: "", password: "" })}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
