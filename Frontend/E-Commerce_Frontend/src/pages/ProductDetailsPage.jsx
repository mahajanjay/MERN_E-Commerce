import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetail";

function ProductDetailsPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </div>
  );
}

export default ProductDetailsPage;
