import React from "react";
import ShopCard from "../Global/ShopCard";
import PropTypes from "prop-types";
const ShopCardRow = ({ shops }) => {
  return (
    <div className="w-full">
      <h2 className="mb-10px text-lg sm:text-2xl font-semibold">熱門商家</h2>
      <div className=" flex scrollbar-hide flex-nowrap overflow-x-auto whitespace-nowrap">
        {shops.map((shop) => (
          <div key={shop._id} className="mr-20px w-300px min-w-300px">
            <ShopCard shop={shop} />
          </div>
        ))}
      </div>
    </div>
  );
};
ShopCardRow.propTypes = {
  shops: PropTypes.array,
};

export default ShopCardRow;
