import React from "react";

const Button = ({ Icon, title }) => {
  return (
    <button className="mx-3 flex items-center justify-center py-10px w-full">
      <Icon className="h-5 mr-2" />
      <span>{title}</span>
    </button>
  );
};

export default Button;
