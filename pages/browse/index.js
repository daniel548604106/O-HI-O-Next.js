import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Browse/SideBar.js";
import Products from "../../components/Browse/Products";
import FilterOverlay from "../../components/Browse/FilterOverlay";
import { menuOptions } from "../../lib/menuOptions";
import { apiGetAllProducts } from "../../api/index";
import router from "next/router";
// import notify from "../../lib/notification.js";
const Browse = () => {
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [activeCategory, setActiveCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filterShow, setFilterShow] = useState(false);
  useEffect(() => {
    setCategoryId(router.query.category);
    setSubcategoryId(router.query.subcategoryId);
  }, []);

  useEffect(() => {
    const active = () => {
      const category = menuOptions.find((option) => {
        return option.id === +categoryId;
      });
      setActiveCategory(category);
    };
    active();
  }, [categoryId]);
  // Get Products
  useEffect(() => {
    router.push(`${location.pathname}?page=${currentPage}`);
    const getProducts = async () => {
      try {
        const products = await apiGetAllProducts(qs.stringify(query));
        setProducts(products.data.products);
        setTotalPage(products.data.totalPage);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [currentPage, location.search]);
  return (
    <div>
      <div>
        <FilterOverlay setFilterShow={setFilterShow} />
      </div>
      {/* <div>
        <Sidebar categoryId={categoryId} />
      </div> */}
      <div>
        <Products
          setFilterShow={setFilterShow}
          currentPage={currentPage}
          totalPage={totalPage}
          categoryId={categoryId}
          setCurrentPage={setCurrentPage}
          activeCategory={activeCategory}
          subcategoryId={subcategoryId}
          products={products}
        />
      </div>
    </div>
  );
};

export default Browse;
