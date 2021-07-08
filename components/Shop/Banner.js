import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const Banner = ({ shop }) => {
  return (
    <div className="w-full relative pt-100px sm:pt-20% bg-cover bg-center bg-no-repeat">
      <Image src={shop.banner} layout="fill" className="object-cover" />
    </div>
  );
};

Banner.propTypes = {
  shop: PropTypes.object,
};

export default Banner;
