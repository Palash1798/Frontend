import { useState } from "react";
import { Product } from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    { name: "Product 1", id: 1, availability: true, quantity: 1 },
    { name: "Product 2", id: 2, availability: true, quantity: 2 },
    { name: "Product 3", id: 3, availability: false, quantity: 1 },
    { name: "Product 4", id: 4, availability: true, quantity: 4 },
    { name: "Product 5", id: 5, availability: false, quantity: 1 },
    { name: "Product 6", id: 6, availability: false, quantity: 5 },
    { name: "Product 7", id: 7, availability: true, quantity: 1 },
  ]);

  const handleProductAdd = (e) => {
    if (e.key === "Enter") {
      const newProduct = {
        name: e.target.value,
        id: Math.random(),
        availability: true,
        quantity: 1,
      };
      setProducts([...products, newProduct]);
    }
  };

  return (
    // forEach, map, filter, reduce, for
    <div>
      <input placeholder="Add Product" onKeyDown={handleProductAdd} />
      {products.map((product) => {
        return product.availability ? (
          <Product name={product.name} quantity={product.quantity} />
        ) : null;
      })}
    </div>
  );
};

export default ProductList;