import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "../Global/ProductCard";
import Pagination from "../Global/Pagination";
import Loader from "../Global/Loader";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const Products = ({
  activeCategory,
  products,
  currentPage,
  setCurrentPage,
  totalPage,
  subcategoryId,
  setFilterShow,
}) => {
  // const [activeSubcategory, setActiveSubcategory] = useState([]);
  useEffect(() => {
    if (activeCategory && subcategoryId) {
      subcategory = activeCategory.category.find((option) => {
        return option.id === subcategoryId;
      });
    }
  }, [activeCategory, subcategoryId]);

  const filter = (e) => {
    const { name, order } = e.target.value;
    router.push(`${router.pathname}?sort=${name}&order=${order}`);
  };

  return (
    <>
      <div>
        {window.innerWidth > 500 ? (
          <div>
            {activeCategory ? (
              <h2>{activeCategory.title}</h2>
            ) : (
              <h2>今日熱門商品</h2>
            )}
          </div>
        ) : (
          <a onClick={() => setFilterShow(true)}>
            <ChevronLeftIcon className="h-6" />
            <span>篩選商品</span>
          </a>
        )}
        <div>
          <select onChange={(e) => filter(e)} name="sort" id="sort">
            <option value="sort" selected disabled>
              排序
            </option>
            <option value='{"name": "rank", "order": ""}'>熱門程度優先</option>
            <option value='{"name": "price", "order": "descending"}'>
              價格由高至低
            </option>
            <option value='{"name": "price", "order": "ascending"}'>
              價格由低至高
            </option>
          </select>
        </div>
      </div>
      {products.length ? (
        <div>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

Products.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  categoryId: PropTypes.string,
  activeCategory: PropTypes.arrays,
  subcategoryId: PropTypes.number,
  products: PropTypes.array,
  setCurrentPage: PropTypes.func,
  setFilterShow: PropTypes.func,
};

export default Products;
