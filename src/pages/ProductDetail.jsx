
    import React, { useEffect, useState, useContext } from "react";
    import { useParams } from "react-router-dom";
    import { CartContext } from "../context/CartContext";
    import productsData from "../data/products.json"; 

    const ProductDetail = () => {
      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const { addToCart } = useContext(CartContext);

      useEffect(() => {
        
        setTimeout(() => {
          const foundProduct = productsData.find((p) => p.id === parseInt(id));
          setProduct(foundProduct);
        }, 300); 
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
