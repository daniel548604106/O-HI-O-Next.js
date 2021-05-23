import React, { useState, useEffect, useRef, createRef } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { listProducts } from "../../redux/actions/productAction";
import {
  apiGetProduct,
  apiGetReviews,
  apiGetRecommendedProducts,
} from "../../api/index";

import ProductRecommendation from "../../components/Product/ProductRecommendation";
// import { useTranslation } from "react-i18next";

const Product = () => {
  // const { t, i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const topDisplay = useRef(null);
  const productDescription = createRef();
  const evaluation = createRef();

  const [product, setProduct] = useState("");
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

  // Show Banner
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 400) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    });
  }, []);
  // Fetch Reviews

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await apiGetReviews(router.query.product);
      setReviews(data.reviews);
    };
    if (router.query.product) {
      getReviews();
    }
  }, [router.query.product]);

  // Fetch Product

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await apiGetProduct(router.query.product);
      setProduct(data.product);
    };
    if (router.query.product) {
      getProduct();
    }
  }, [router.query.product]);

  // Fetch Recommended Products
  useEffect(() => {
    const getRecommendedProducts = async () => {
      const { data } = await apiGetRecommendedProducts();
      setRecommendedProducts(data.products);
    };
    getRecommendedProducts();
  }, []);

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
      <Head
        title={product.name}
        description={product.description}
        image={product && product.images[0]}
      />
      {/* <div className={showBanner ? classes.showBanner : classes.hideBanner}>
        <ProductBanner product={product} scrollToPage={scrollToPage} />
      </div> */}
      {/* <div className={classes.containerLayout}>
        <div ref={topDisplay} className={classes.productDisplay}>
          <ProductDisplay product={product} />
        </div>
        <section className={classes.productMainInfo}>
          <div className={classes.info}>
            <ProductInfo t={t} product={product} />
          </div>
          <div className={classes.cta}>
            <ProductCTA product={product} />
          </div>
        </section>
      </div>
      <div className={classes.containerLayout}>
        <section className={classes.productDescription}>
          <ProductDescription
            t={t}
            productDescriptionRef={productDescription}
            evaluationRef={evaluation}
            id="product-description"
            product={product}
            reviews={reviews}
          />
        </section>
        <section className={classes.designShopInfo}>
          <DesignShopInfo product={product} shopInfo={shopInfo} />
        </section>
      </div> */}
      <section>
        <ProductRecommendation products={recommendedProducts} />
      </section>
    </div>
  );
};

export default Product;
