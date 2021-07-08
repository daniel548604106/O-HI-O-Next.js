import React from "react";
import ProductCard from "../Global/ProductCard";
import PropTypes from "prop-types";
import { ChevronUpIcon } from "@heroicons/react/outline";
import router from "next/router";
const filterTypes = [
  {
    name: "設計館推薦",
    type: "recommend",
    id: 1,
  },
  {
    name: "熱門程度優先",
    type: "popularity",
    id: 2,
  },
  {
    name: "最新上架優先",
    type: "latest",
    id: 3,
  },
  {
    name: "價格優高到低",
    type: "price",
    orderBy: "descending",
    id: 4,
  },
  {
    name: "價格優低到高",
    type: "latest",
    orderBy: "ascending",
    id: 5,
  },
];
const Filter = () => {
  const changeFilter = (e) => {
    console.log(router);
    router.push(
      `/shops/${router.query.id}/?tab=${router.query.tab}&sortby=${e.target.value}`,
      undefined,
      { shallow: true }
    );
  };
  return (
    <div>
      <select onChange={(e) => changeFilter(e)} name="product" id="product">
        {filterTypes.map((types) => (
          <>
            <ChevronUpIcon className="h-6" />
            <option key={types.id} value={types.type}>
              {types.name}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};
const ProductList = ({ products }) => {
  return (
    <div className="space-y-3">
      <Filter />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6  gap-4">
        {products &&
          products.map((product) => (
            <span key={product._id}>
              <ProductCard product={product} />
            </span>
          ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
