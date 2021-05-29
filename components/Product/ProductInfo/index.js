import React from "react";
import PropTypes from "prop-types";
import { discount } from "../../../lib/tool";

const ProductInfo = ({ product }) => {
  return (
    product && (
      <div>
        <>
          <p className="text-lg sm:text-2xl text-gray-700">
            {product.publishedBy.name}
          </p>
          <h1 className="text-lg sm:text-xl font-bold">{product.name}</h1>
          <div className="py-10px flex items-end justify-between">
            <div className="flex justify-end font-bold">
              {product.discountPrice && (
                <div className="mr-10px text-lg text-main-pink">
                  ${product.discountPrice}
                </div>
              )}
              <div
                className={
                  product.discountPrice
                    ? "text-md line-through text-gray-700"
                    : "text-lg"
                }
              >
                ${product.fullPrice}
              </div>
            </div>
            <div className="hidden sm:block text-gray-700 text-sm">
              <p>
                From:
                <a
                  href={product.publishedBy.website}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 cursor-pointer font-semibold"
                >
                  {product &&
                    (product.publishedBy.website || product.publishedBy.name)}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center my-4">
            {product.discountPrice && (
              <div className="mr-10px">
                <span className="px-10px py-5px mr-10px border-main-pink border text-main-pink">
                  {discount(product)}
                </span>
                <span className="rounded-b-md text-main-pink">
                  省下 ${product.fullPrice - product.discountPrice}
                </span>
              </div>
            )}
          </div>
          <hr className="my-20px" />
        </>
      </div>
    )
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
};
export default ProductInfo;
