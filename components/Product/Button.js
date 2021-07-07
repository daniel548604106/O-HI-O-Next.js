import React from "react";

const Button = ({ Icon, title, bgColor, textColor, borderColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${borderColor} hover:opacity-90 py-3  flex items-center justify-center  w-full `}
    >
      <Icon className="h-5 mr-2" />
      <span className="whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
