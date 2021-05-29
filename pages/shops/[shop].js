import React, { useEffect, useState } from "react";
import Tabs from "../../components/Global/Tabs";
import RefundPolicy from "../../components/Shops/Shop/RefundPolicy";
import ShopInfo from "../../components/Shops/Shop/ShopInfo";
import Banner from "../../components/Shops/Shop/Banner";
import ProductList from "../../components/Shops/Shop/ProductList";
import SideBar from "../../components/Shops/Shop/SideBar";
import RecommendedDesign from "../../components/Shops/Shop/RecommendedDesign";
import { apiGetShopInfo, apiGetAllShops } from "../../api/index";
import { useRouter } from "next/router";
const tabs = [
  {
    name: "商品",
    location: "product",
  },
  {
    name: "設計館故事",
    location: "story",
  },
  {
    name: "退換貨政策",
    location: "policy",
  },
];
const Shop = ({ shop }) => {
  const router = useRouter();
  const [shopInfo, setShopInfo] = useState({});

  return (
    <div>
      <Banner shop={shop} />
      <div className="px-30px">
        <ShopInfo shop={shop} />
        <button class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:rotate-180 hover:scale-110 ...">
          Hover me
        </button>
        {/* <Tabs tabs={tabs} /> */}
        {/* {activeTab === "product" && (
          <div>
            <RecommendedDesign pinnedProducts={shopInfo.pinnedProducts} />
            <div className="flex py-20px">
              <SideBar />
              <div className="flex-1">
                <ProductList products={shopInfo.products} />
              </div>
            </div>
          </div>
        )}
        {activeTab === "story" && (
          <div className="max-w-760px w-full mx-auto mt-50px mb-100px">
            <p className="text-md text-gray-800"> {shopInfo.story}</p>
          </div>
        )}
        <div className="w-800px mx-auto">
          {activeTab === "policy" && <RefundPolicy />}
        </div> */}
      </div>
    </div>
  );
};

export default Shop;

// This function gets called at build time
// 先取得所有資料的 id
export async function getStaticPaths() {
  const { shops } = (await apiGetAllShops()).data;
  const paths = shops.map((item) => ({
    params: { shop: item.account.toString() },
  }));
  console.log(paths);
  return { paths, fallback: true };
}

// This also gets called at build time

export async function getStaticProps(context) {
  const { shop } = JSON.parse(
    JSON.stringify((await apiGetShopInfo(context.params.shop)).data)
  );
  console.log("shop", shop);
  return {
    props: {
      shop,
    },
  };
}
