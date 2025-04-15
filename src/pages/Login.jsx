// import React from "react";
// import { Link } from "react-router-dom";


// const Login = () => {
//   return (
//     <div className="auth-page">
//       <h2>Login</h2>
//       <form>
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don’t have an account? <Link to="/register">Register here</Link>
//       </p>

//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css"; // Import your CSS file for styling
import googleIcon from '../images/google-icon.png';
import testImage from '../images/tesst.png';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Disable scrolling when the login page is active
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the login page is unmounted
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    localStorage.setItem("isLoggedIn", "true"); // Persist login state in localStorage
    setIsLoggedIn(true); // Update the state in the App component
    navigate("/"); // Redirect to the Home page
  };

  // return (
  //   <div className="auth-page">
  //     <h2>Login</h2>
  //     <form onSubmit={handleLogin}>
  //       <input type="email" placeholder="Email" required />
  //       <input type="password" placeholder="Password" required />
  //       <button type="submit">Login</button>
  //     </form>
  //     <p>
  //       Don’t have an account? <Link to="/register">Register here</Link>
  //     </p>
  //   </div>
  // );
  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="brand">Vera</div>
        <h2>Login</h2>
        <p className="subtitle">Choose from 10,000+ products across 400+ categories</p>

        {/* <button className="google-btn">Sign in with Google</button> */}
        
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