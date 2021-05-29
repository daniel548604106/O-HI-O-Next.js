import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { ChevronDownIcon } from "@heroicons/react/outline";
const Dropdown = ({ title, product }) => {
  const [showMore, setShowMore] = useState(false);
  const [hideDropdown, setHideDropdown] = useState(false);
  return (
    <div>
      <div className="py-15px">
        <div className="flex w-full items-center justify-between">
          <Title title={title} />
          <div
            onClick={() => setHideDropdown(!hideDropdown)}
            className="cursor-pointer transition-all duration-300 ease-in-out"
          >
            <ChevronDownIcon className={hideDropdown ? "rotate-180" : ""} />
          </div>
        </div>
        {!hideDropdown && (
          <div className={hideDropdown ? "h-0" : "h-auto mt-20px"}>
            <div className="relative">
              <p
                className="overflow-y-hidden relative "
                style={{ height: showMore ? "100%" : "300px" }}
              >
                {product.description}
              </p>
              <div className=" h-50px w-full block absolute bottom-0 left-0 bg-bg-white bg-opacity-70"></div>
              {
                <div onClick={() => setShowMore(!showMore)}>
                  <span>{showMore ? "收起內容" : "展開內容"}</span>
                  <ChevronDownIcon
                    className="h-8"
                    style={{ transform: showMore && "rotate(180deg)" }}
                  />
                </div>
              }
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  product: PropTypes.object,
};

export default Dropdown;
