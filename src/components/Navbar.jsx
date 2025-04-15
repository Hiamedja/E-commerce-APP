// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
  

//   return (
//     <nav className="navbar">
//       <h2>🛍 Shop</h2>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart ({cartItems.length})</Link>
//         {/* <Link to="/login">Login</Link> */}
//         <Link to="/login">Logout</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = ({ setIsLoggedIn }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state from localStorage
    setIsLoggedIn(false); // Update the state in the App component
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <h2>🛍 Shop</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;