// Starter template for a React E-Commerce Frontend App

// src/App.jsx
import React from "react-dom";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { CartProvider } from "./context/CartContext";
import './main.css';


// const App = () => {
//   return (
//     // <CartProvider>
//       <Router>
//         <Navbar />
//         <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//         </div>
//       </Router>
//     // </CartProvider>
//   );
// };

// export default App;

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check localStorage to persist login
//   useEffect(() => {
//     const storedLogin = localStorage.getItem("isLoggedIn");
//     if (storedLogin === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   return (
//     // <CartProvider>
//     <Router>
//       {isLoggedIn && <Navbar onLogout={handleLogout} />}
//       <div className="container">
//         <Routes>
//           {!isLoggedIn ? (
//             <>
//               <Route path="/" element={<Login onLogin={handleLogin} />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/register" element={<Register />} />
//               {/* Redirect any unknown route to login */}
//               <Route path="*" element={<Navigate to="/login" />} />
//             </>
//           ) : (
//             <>
//               <Route path="/" element={<Home />} />
//               <Route path="/product/:id" element={<ProductDetail />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </>
//           )}
//         </Routes>
//       </div>
//     </Router>
//     // </CartProvider>
//   );
// };

// export default App;


const ProtectedRoute = ({ isLoggedIn, children }) => {
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();

  // Allow access to Register page even if not logged in
  if (location.pathname === "/register") {
    return children;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setIsLoading(false); // Set loading to false after initialization
  }, []);

  if (isLoading) {
    // Show a loading spinner or placeholder while checking login state
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};


const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation(); // Move useLocation inside the Router context

  return (
    <>
      {/* Conditionally render the Navbar */}
      {isLoggedIn && location.pathname !== "/login" && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProductDetail />
              </ProtectedRoute>
            }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
        </div>
      </>
    );
  };
  
  export default App;

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Loading state
//   // const location = useLocation(); // Get the current location

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//     setIsLoading(false); // Set loading to false after initialization
//   }, []);

//   if (isLoading) {
//     // Show a loading spinner or placeholder while checking login state
//     return <div>Loading...</div>;
//   }

//   return (
//     <Router>
//       {/* {isLoggedIn && <Navbar />} */}
//       {/* {isLoggedIn && location.pathname !== "/login" && <Navbar />} */}
//       {isLoggedIn && location.pathname !== "/login" && <Navbar setIsLoggedIn={setIsLoggedIn} />}
//       <div className="container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               // <ProtectedRoute>
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/product/:id"
//             element={
//               // <ProtectedRoute>
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <ProductDetail />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/cart"
//             element={
//               // <ProtectedRoute>
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;