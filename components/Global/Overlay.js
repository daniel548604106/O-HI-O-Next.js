import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="bg-gray-600 opacity-50 fixed top-0 left-0 w-screen h-screen">
      {children}
    </div>
  );
};

export default Overlay;
