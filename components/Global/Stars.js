import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
const Stars = ({ score }) => {
  const [starArr, setStarArr] = useState([]);
  useEffect(() => {
    let integer = Number((score + "").split(".")[0]);
    let decimal = Number((score + "").split(".")[1]);
    const count = () => {
      for (let i = 0; i < integer; i++) {
        starArr.push(1);
      }
      if (isNaN(decimal) || decimal === undefined || 0) return;
      starArr.push(+`0.${decimal}`);
    };
    count();
  }, [score, starArr]);
  return (
    <div className="flex items-center justify-evenly w-100px ml-20px">
      {starArr.map((star, idx) => (
        <li
          key={idx}
          style={{
            width: "30px",
            height: "30px",
            display: "block",
            backgroundImage: `url('/assets/images/star.png')`,
            position: "relative",
          }}
        >
          <span
            style={{
              backgroundImage: `url('/assets/images/star-grey.png)`,
              width: "100%",
              height: "100%",
              display: "block",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          ></span>
        </li>
      ))}
    </div>
  );
};

Stars.propTypes = {
  score: PropTypes.number,
};

export default Stars;
