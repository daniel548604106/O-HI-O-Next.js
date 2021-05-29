import React, { useState, useEffect } from "react";
import ProductCard from "../Global/ProductCard";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const ProductCardRow = ({ title, products }) => {
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );

  useEffect(() => {
    let ids = favoriteProducts.map((product) => {
      return product._id;
    });
    setFavoriteProductIds(ids);
    console.log(favoriteProductIds);
  }, [favoriteProducts]);

  return (
    <>
      <h1 className="font-semibold mb-10px sm:mb-20px text-lg sm:text-2xl">
        {title}
      </h1>
      <div className="flex items-center scrollbar-hide overflow-scroll whitespace-nowrap">
        {products.map((product) => (
          <div
            key={product._id}
            className="mr-10px w-150px min-w-150px sm:min-w-200px "
          >
            <ProductCard
              product={product}
              favoriteProductIds={favoriteProductIds}
            />
          </div>
        ))}
      </div>
    </>
  );
};

ProductCardRow.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};

export default ProductCardRow;
