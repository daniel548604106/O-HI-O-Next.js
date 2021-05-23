// import React, { useState, useEffect, useRef, createRef } from "react";
// import Head from "next/head";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// import { listProducts } from "../../redux/actions/productAction";
// import {
//   apiGetProduct,
//   apiGetReviews,
//   apiGetRecommendedProducts,
//   apiGetAllProducts,
// } from "../../api/index";

// import ProductRecommendation from "../../components/Product/ProductRecommendation";
// import { getServerSideProps } from "..";
// // import { useTranslation } from "react-i18next";

// const Product = ({ product }) => {
//   // const { t, i18n } = useTranslation();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const topDisplay = useRef(null);
//   const productDescription = createRef();
//   const evaluation = createRef();

//   const [shopInfo] = useState("");
//   const [recommendedProducts, setRecommendedProducts] = useState([]);
//   const [showBanner, setShowBanner] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     console.log(router.query);
//   }, [router.query]);
//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);

//   // Show Banner
//   useEffect(() => {
//     console.log(product);
//     window.addEventListener("scroll", function () {
//       if (window.pageYOffset > 400) {
//         setShowBanner(true);
//       } else {
//         setShowBanner(false);
//       }
//     });
//   }, []);
//   // Fetch Reviews

//   // useEffect(() => {
//   //   const getReviews = async () => {
//   //     const { data } = await apiGetReviews(router.query.product);
//   //     setReviews(data.reviews);
//   //   };
//   //   if (router.query.product) {
//   //     getReviews();
//   //   }
//   // }, [router.query.product]);

//   // Fetch Product

//   // useEffect(() => {
//   //   const getProduct = async () => {
//   //     const { data } = await apiGetProduct(router.query.product);
//   //     setProduct(data.product);
//   //   };
//   //   if (router.query.product) {
//   //     getProduct();
//   //   }
//   // }, [router.query.product]);

//   // // Fetch Recommended Products
//   // useEffect(() => {
//   //   const getRecommendedProducts = async () => {
//   //     const { data } = await apiGetRecommendedProducts();
//   //     setRecommendedProducts(data.products);
//   //   };
//   //   getRecommendedProducts();
//   // }, []);

//   const scrollToPage = (idx) => {
//     idx === 0
//       ? window.scrollTo({
//           behavior: "smooth",
//           top: productDescription.current.offsetTop - 80,
//         })
//       : window.scrollTo({
//           behavior: "smooth",
//           top: evaluation.current.offsetTop - 80,
//         });
//   };

//   return (
//     <div className="max-w-1200px mx-auto p-0 sm:p-20px">
//       {/* <Head
//         title={product.name}
//         description={product.description}
//         image={product && product.images[0]}
//       /> */}
//       {/* <div className={showBanner ? classes.showBanner : classes.hideBanner}>
//         <ProductBanner product={product} scrollToPage={scrollToPage} />
//       </div> */}
//       {/* <div className={classes.containerLayout}>
//         <div ref={topDisplay} className={classes.productDisplay}>
//           <ProductDisplay product={product} />
//         </div>
//         <section className={classes.productMainInfo}>
//           <div className={classes.info}>
//             <ProductInfo t={t} product={product} />
//           </div>
//           <div className={classes.cta}>
//             <ProductCTA product={product} />
//           </div>
//         </section>
//       </div>
//       <div className={classes.containerLayout}>
//         <section className={classes.productDescription}>
//           <ProductDescription
//             t={t}
//             productDescriptionRef={productDescription}
//             evaluationRef={evaluation}
//             id="product-description"
//             product={product}
//             reviews={reviews}
//           />
//         </section>
//         <section className={classes.designShopInfo}>
//           <DesignShopInfo product={product} shopInfo={shopInfo} />
//         </section>
//       </div> */}
//       {/* <section>
//         <ProductRecommendation products={recommendedProducts} />
//       </section> */}
//     </div>
//   );
// };

// export default Product;

// // This function gets called at build time
// // 先取得所有資料的 id
// export async function getStaticPaths() {
//   // const { products } = await (await apiGetAllProducts()).data;
//   // console.log(products);
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   // Get the paths we want to pre-render based on posts
//   // const paths = products.map((product) => ({
//   //   params: { id: product._id.toString() },
//   // }));
//   const paths = data.map((item) => ({
//     params: { id: item.id.toString() },
//   }));
//   console.log("paths", paths);

//   return { paths, fallback: true };
// }

// // This also gets called at build time

// export async function getStaticProps({ params }) {
//   const product = JSON.parse(
//     JSON.stringify((await apiGetProduct(params.id)).data)
//   );
//   return {
//     props: {
//       product,
//     },
//   };
// }

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      sdf
      {/* <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p> */}
    </div>
  );
};

export default Details;
