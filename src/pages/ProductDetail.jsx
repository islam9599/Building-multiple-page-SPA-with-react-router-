import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const param = useParams();
  return (
    <div>
      <h1>Product detail!</h1>
      <p>{param.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetail;
