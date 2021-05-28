import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
const Tabs = ({ tabs }) => {
  const router = useRouter();
  const switchTab = (tab) => {
    router.push(`${router.pathname}?tab=${tab}`);
  };

  useEffect(() => {
    switchTab();
  }, []);
  return (
    <div className="flex items-end w-full border-b-1 border-bg-white">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => switchTab(tab.location)}
          className={`px-2 py-3 mr-10px mt-20px text-lg text-gray-700 cursor-pointer
            ${
              router.query.tab === tab.location
                ? "border-b-2 border-gray-800 font-semibold"
                : ""
            }
         `}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
};
export default Tabs;
