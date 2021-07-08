import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../Global/ProductCard";
const RecommendedDesign = ({ pinnedProducts }) => {
  return (
    <>
      {pinnedProducts && pinnedProducts.length > 0 && (
        <div>
          <h2>設計師主打設計</h2>
          <div>
            {pinnedProducts &&
              pinnedProducts.map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

RecommendedDesign.propTypes = {
  pinnedProducts: PropTypes.array,
};
export default RecommendedDesign;
