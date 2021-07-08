import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { menuOptions, priceOptions } from "../../lib/menuOptions";
const FilterOverlay = ({ setFilterShow }) => {
  const [activeFilter, setActiveFilter] = useState(-1);
  const handleActiveFilter = (idx) => {
    activeFilter === idx ? setActiveFilter(-1) : setActiveFilter(idx);
  };
  const filterOptions = [
    {
      title: "商品分類",
      options: [...menuOptions],
    },
    {
      title: "金額",
      options: [...priceOptions],
    },
  ];
  return (
    <div>
      <div>
        <span onClick={() => setFilterShow(false)}>
          <ChevronLeftIcon className="h-6" />
          返回
        </span>
        <span>重設篩選</span>
      </div>
      <div>
        <h3>縮小商品顯示範圍:</h3>
        <div>
          {filterOptions.map(({ title, options }, index) => (
            <div key={title}>
              <div onClick={() => handleActiveFilter(index)}>
                <span>{title}</span>
                <div>
                  <ChevronLeftIcon className="h-6" />
                </div>
              </div>
              {activeFilter === index && (
                <div>
                  {options.map((option) => (
                    <div key={option.title}>{option.title}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FilterOverlay.propTypes = {
  setFilterShow: PropTypes.func,
};

export default FilterOverlay;
