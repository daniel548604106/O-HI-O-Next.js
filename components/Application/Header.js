import React, { useEffect } from "react";
import Logo from "../../public/images/O.HI.O-logo-application.svg";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-20px py-15px">
        <div className="flex items-center">
          <Logo />
          <h2 className="hidden sm:block ml-3">我要開 O.HI.O 館</h2>
        </div>
        <div>
          <button className="bg-light-blue rounded-sm px-20px py-10px text-white">
            立即申請開館
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
