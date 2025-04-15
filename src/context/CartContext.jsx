// // import React, { createContext, useState } from "react";

// // export const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);

// //   const addToCart = (product) => {
// //     setCartItems([...cartItems, product]);
// //   };

// //   const removeFromCart = (id) => {
// //     setCartItems(cartItems.filter((item) => item.id !== id));
// //   };

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // context/CartContext.jsx
// import React, { createContext, useState } from "react";

// // Création du contexte
// export const CartContext = createContext();

// // Fournisseur du contexte
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Ajouter un produit au panier
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemExists = prevItems.find((item) => item.id === product.id);

//       if (itemExists) {
//         // Si le produit existe déjà, on augmente la quantité
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // Sinon, on l'ajoute avec une quantité initiale de 1
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Supprimer un produit du panier
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage on initial load
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};