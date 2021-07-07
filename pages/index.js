import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Head from "next/head";
import Banner from "../components/Home/Banner";
import {
  apiGetBanners,
  apiGetDiscountedProducts,
  apiGetEditorPickedProducts,
  apiGetPopularShops,
  apiGetRecommendedProducts,
} from "../api/index";
import { useDispatch, useSelector } from "react-redux";
import ShopCardRow from "../components/Home/ShopCardRow";
import ProductCardRow from "../components/Home/ProductCardRow";
import { getFavList } from "../redux/actions/globalAction";
export default function Home({
  banners,
  recommendedProducts,
  discountedProducts,
  editorPickedProducts,
  popularShops,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookie.get("token") !== undefined) {
      console.log("set");
      dispatch(getFavList());
    }
  }, [Cookie.get("token")]);

  return (
    <div>
      <Head>
        <title>O-HI-O | 亞洲購物專家</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0 , user-scalable=no"
        />
        <meta
          name="description"
          content="O.HI.O 販售設計商品、數位創作及台灣文物，致力為台灣新創者提供更友善的販售平台。"
        />
        <meta name="keywords" content="O.HI.O 買設計 文創 客製化 禮物" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="O.HI.O 設計品牌衣著服飾每日上架，海內外最新設計師品牌每日上架，精選商品免運天天有，首購即享特殊優惠，尋找獨特日常穿搭就在 O.HI.O 。"
        />
        <meta property="fb:app_id" content="4937468222991458" />
        <meta
          property="og:title"
          content="O.HI.O | 亞洲領先設計購物網站 | Design the way you are"
        />
        <meta property="og:url" content="https://www.pinkoi.com/browse" />
        <meta
          property="og:image"
          content="https://cdn01.pinkoi.com/product/ZD5QQsTg/0/800x0.jpg"
        />
        <link rel="apple-touch-icon" href="./favicon.ico" />

        <meta name="theme-color" />
      </Head>
      <Banner banners={banners.banners} />
      <main className="py-20px sm:py-50px max-w-6xl  w-full mx-auto">
        <section className="px-15px mb-20px sm:mb-50px">
          <ProductCardRow
            title={"推薦商品"}
            products={recommendedProducts.products}
          />
        </section>
        <section className="px-15px mb-20px sm:mb-50px">
          <ProductCardRow
            title={"限時優惠"}
            products={discountedProducts.products}
          />
        </section>
        <section className="px-15px mb-20px sm:mb-50px">
          <ProductCardRow
            title={"小編精選"}
            products={editorPickedProducts.products}
          />
        </section>
        <section className="px-15px mb-20px sm:mb-50px">
          <ShopCardRow shops={popularShops} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await apiGetBanners();
  const recommendedProducts = JSON.parse(
    JSON.stringify((await apiGetRecommendedProducts()).data)
  );
  const discountedProducts = JSON.parse(
    JSON.stringify((await apiGetDiscountedProducts()).data)
  );
  const editorPickedProducts = JSON.parse(
    JSON.stringify((await apiGetEditorPickedProducts()).data)
  );
  const popularShops = JSON.parse(
    JSON.stringify((await apiGetPopularShops()).data.shops)
  );
  const banners = JSON.parse(JSON.stringify(res.data));
  return {
    props: {
      banners,
      recommendedProducts,
      discountedProducts,
      editorPickedProducts,
      popularShops,
    },
  };
}
