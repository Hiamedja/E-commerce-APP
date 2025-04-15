// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-detail">
//       <img src={product.image} alt={product.title} />
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetail;

 // src/pages/ProductDetail.jsx
    import React, { useEffect, useState, useContext } from "react";
    import { useParams } from "react-router-dom";
    import { CartContext } from "../context/CartContext";
    import productsData from "../data/products.json"; // Import your mock data

    const ProductDetail = () => {
      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const { addToCart } = useContext(CartContext);

      useEffect(() => {
        // Simulate fetching a single product
        setTimeout(() => {
          const foundProduct = productsData.find((p) => p.id === parseInt(id));
          setProduct(foundProduct);
        }, 300); // Simulate a small delay
      }, [id]);

      if (!product) return <p>Loading...</p>;

      return (
        <div className="product-detail">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      );
    };

    export default ProductDetail;
