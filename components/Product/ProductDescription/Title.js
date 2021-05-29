import React from "react";
import PropTypes from "prop-types";
const Title = ({ title }) => {
  return <div className="text-lg sm:text-2xl font-bold">{title}</div>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
