import React from "react";
import ProductCard from "../Global/ProductCard";
import PropTypes from "prop-types";
const ProductRecommendation = ({ products }) => {
  return (
    <div className="py-20px">
      <h2 className="mb-20px text-lg sm:text-xl">為你推薦的好設計</h2>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

ProductRecommendation.propTypes = {
  products: PropTypes.array,
};

export default ProductRecommendation;
