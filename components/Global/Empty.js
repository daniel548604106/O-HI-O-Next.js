import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
const Empty = ({ title }) => {
  const router = useRouter();
  const directTo = () => {
    router.push("/browse");
  };
  return (
    <div className="mx-auto text-center flex items-center justify-center flex-col">
      <p className="text-lg mb-30px mt-100px">{title}</p>
      <span
        className="cursor-pointer bg-main-pink text-white rounded-md p-10px"
        onClick={() => directTo()}
      >
        來去逛逛吧！
      </span>
    </div>
  );
};

Empty.propTypes = {
  title: PropTypes.string,
};

export default Empty;
