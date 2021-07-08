import React, { useState, useEffect } from "react";
import { menuOptions } from "../../lib/menuOptions";
import PropTypes from "prop-types";
import { Link } from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
// const Sidebar = ({ categoryId }) => {
//   const [activeCategory, setActiveCategory] = useState([]);
//   useEffect(() => {
//     const active = () => {
//       const category = menuOptions.find((option) => {
//         return option.id === +categoryId;
//       });
//       setActiveCategory(category);
//     };
//     active();
//   }, [categoryId]);

//   return (
//     <div>
//       {window.innerWidth > 500 && <h2>商品分類</h2>}
//       {categoryId ? (
//         <>
//           <Link to="/browse">
//             <ChevronLeftIcon />
//             <span>所有分類</span>
//           </Link>
//           <div>
//             {activeCategory &&
//               activeCategory.category.map((category) => (
//                 <Link
//                   key={category.id}
//                   to={`${location.pathname}?category=${categoryId}&subcategory=${category.id}`}
//                 >
//                   <p>{category.name}</p>
//                 </Link>
//               ))}
//           </div>
//         </>
//       ) : (
//         <div>
//           {menuOptions.map((option) => (
//             <>
//               <Link to={`/browse?category=${option.id}`} key={option.id}>
//                 <p>{option.title}</p>
//               </Link>
//             </>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   categoryId: PropTypes.string,
// };

// export default Sidebar;

const Sidebar = () => {
  // const [activeCategory, setActiveCategory] = useState([]);
  // useEffect(() => {
  //   const active = () => {
  //     const category = menuOptions.find((option) => {
  //       return option.id === +categoryId;
  //     });
  //     setActiveCategory(category);
  //   };
  //   active();
  // }, [categoryId]);
  return (
    <div>
      {window.innerWidth > 500 && <h2>商品分類</h2>}
      {/* {categoryId ? (
        <>
          <Link to="/browse">
            <ChevronLeftIcon />
            <span>所有分類</span>
          </Link>
          <div>
            {activeCategory &&
              activeCategory.category.map((category) => (
                <Link
                  key={category.id}
                  to={`${location.pathname}?category=${categoryId}&subcategory=${category.id}`}
                >
                  <p>{category.name}</p>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <div>
          {menuOptions.map((option) => (
            <>
              <Link to={`/browse?category=${option.id}`} key={option.id}>
                <p>{option.title}</p>
              </Link>
            </>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Sidebar;
