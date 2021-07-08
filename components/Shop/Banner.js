import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const Banner = ({ shop }) => {
  return (
    <div className="w-full p-2 sm:p-5">
      <div className="relative w-full max-w-1200px mx-auto rounded-t-lg relative h-200px  bg-cover bg-center bg-no-repeat">
        <Image
          src={shop.banner}
          layout="fill"
          className="object-cover rounded-t-lg"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {
  shop: PropTypes.object,
};

export default Banner;
