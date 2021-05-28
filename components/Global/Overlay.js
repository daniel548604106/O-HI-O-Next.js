import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="bg-black z-50 bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
      {children}
    </div>
  );
};

export default Overlay;
