import React, { useState, useEffect, useRef, createRef } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { listProducts } from "../../redux/actions/productAction";
import {
  apiGetProduct,
  apiGetReviews,
  apiGetRecommendedProducts,
  apiGetAllProducts,
} from "../../api/index";

import ProductRecommendation from "../../components/Product/ProductRecommendation";
import ProductBanner from "../../components/Product/ProductBanner";
import ProductDisplay from "../../components/Product/ProductDisplay";
import ProductInfo from "../../components/Product/ProductInfo/index";
import ProductCTA from "../../components/Product/ProductCTA/index";
import ProductDescription from "../../components/Product/ProductDescription/index";
import ShopInfo from "../../components/Product/ShopInfo/index";

const Product = ({ product }) => {
  // const { t, i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();
  const [shopInfo] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    const getRecommendedProducts = async () => {
      const { data } = await apiGetRecommendedProducts();
      setRecommendedProducts(data.products);
    };
    getRecommendedProducts();
  }, []);
  // Show Banner
  useEffect(() => {
    console.log(product);
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 400) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    });
  }, []);
  // Fetch Reviews

  const scrollToPage = (idx) => {
    idx === 0
      ? window.scrollTo({
          behavior: "smooth",
          top: productDescription.current.offsetTop - 80,
        })
      : window.scrollTo({
          behavior: "smooth",
          top: evaluation.current.offsetTop - 80,
        });
  };

  return (
    <div className="max-w-1200px mx-auto p-0 sm:p-20px">
      <div
        className={`fixed top-0 left-0 z-0 w-full transition-all duration-300 ${
          showBanner ? "-translate-y-100px" : ""
        }`}
      >
        <ProductBanner product={product} scrollToPage={scrollToPage} />
      </div>
      <div className={`flex mx-auto flex-col sm:flex-row mb-15px sm:mb-30px`}>
        <div ref={topDisplay} className={"flex-auto"}>
          <ProductDisplay product={product} />
        </div>
        <section className={"flex-1 px-15px py-15px"}>
          <div>
            <ProductInfo product={product} />
          </div>
          <div>
            <ProductCTA product={product} />
          </div>
        </section>
      </div>
      <div
        className={
          "flex flex-col sm:flex-row mx-auto mb-15px sm:mb-30px px-15px "
        }
      >
        <section className={"flex-auto"}>
          <ProductDescription
            className="flex-1"
            productDescriptionRef={productDescription}
            evaluationRef={evaluation}
            id="product-description"
            product={product}
            reviews={reviews}
          />
        </section>
        <section className={"sticky w-full top-100px self-start"}>
          <ShopInfo product={product} shopInfo={shopInfo} />
        </section>
      </div>
      <div className="px-15px">
        <section>
          <ProductRecommendation products={recommendedProducts} />
        </section>
      </div>
    </div>
  );
};

export default Product;

// This function gets called at build time
// 先取得所有資料的 id
export async function getStaticPaths() {
  const { products } = (await apiGetAllProducts()).data;
  const paths = products.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: true };
}

// This also gets called at build time

export async function getStaticProps(context) {
  const product = JSON.parse(
    JSON.stringify((await apiGetProduct(context.params.id)).data.product)
  );
  console.log("hello", product);
  return {
    props: {
      product,
    },
  };
}
