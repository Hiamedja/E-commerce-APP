import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Register.css"; // Import your CSS file for styling
import testImage from '../images/test.png';

const Register = () => {
  useEffect(() => {
      // Disable scrolling when the login page is active
      document.body.style.overflow = "hidden";
  
      return () => {
        // Re-enable scrolling when the login page is unmounted
        document.body.style.overflow = "auto";
      };
    }, []);
  return (
    <div className="register-page">
      <div className="register-image-section">
        <img src={testImage} alt="Product" />
      </div>
      <div className="register-form-section">
        <div className="brand">Vera</div>
        <h2>Register</h2>
        <p>Join us and start shopping!</p>
        <form className="register-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="register-btn">Create Account</button>
        </form>
        <p className="login-link">
          already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
