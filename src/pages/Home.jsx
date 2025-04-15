// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import productsData from "../data/products"; // Assuming you have a local data file

// const Home = () => {
//     const [products, setProducts] = useState([]);
//     const { addToCart } = useContext(CartContext);

//     useEffect(() => {
//       // Simulate fetching data
//       setTimeout(() => {
//         setProducts(productsData);
//       }, 500); // Simulate a small delay
//     }, []);

//     return (
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//             <Link to={`/product/${product.id}`}>View</Link>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   export default Home;

// Home.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productsData from "../data/products";
import testpicture from "../images/salon.png";
// import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Modern Interior & Elegant Style</h1>
          <p>Discover the latest trends in home decor and furniture</p>
          <button>Shop Now</button>
        </div>
        <img src={testpicture} alt="Home Decor" className="hero-image" />
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Our Picks</h2>
        <div className="product-showcase">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="showcase-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="buttons">
                <Link to={`/product/${product.id}`}>View</Link>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Catalog Grid */}
      <section className="catalog-section">
        <h2>All Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`}>View</Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
