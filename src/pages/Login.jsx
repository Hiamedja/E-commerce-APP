
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css"; 
import googleIcon from '../images/google-icon.png';
import testImage from '../images/tesst.png';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/"); 
  };

 
  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="brand">Vera</div>
        <h2>Login</h2>
        <p className="subtitle">Choose from 10,000+ products across 400+ categories</p>

        
        <button className="google-btn">
          <img src={googleIcon} alt="Google icon" className="google-icon" />
            Sign in with Google
        </button>
        <div className="divider">OR</div>

        <form onSubmit={handleLogin} className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>

      <div className="login-image-section">
        <img src={testImage} alt="Product" />
      </div>
    </div>
  );
};

export default Login;
