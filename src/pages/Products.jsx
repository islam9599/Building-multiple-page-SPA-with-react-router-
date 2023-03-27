import React from "react";
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p3", title: "Product 4" },
];

const Products = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.key}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
