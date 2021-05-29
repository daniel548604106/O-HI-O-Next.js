import React from "react";
import PropTypes from "prop-types";
const Banner = ({ shop }) => {
  return (
    <div
      className="w-full pt-100px sm:pt-20% bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${shop.banner})` }}
    ></div>
  );
};

Banner.propTypes = {
  shop: PropTypes.object,
};

export default Banner;
