import React, { useEffect, useState } from "react";
import Tabs from "../../components/Global/Tabs";
import RefundPolicy from "../../components/Shop/RefundPolicy";
import ShopInfo from "../../components/Shop/ShopInfo";
import Banner from "../../components/Shop/Banner";
import ProductList from "../../components/Shop/ProductList";
import SideBar from "../../components/Shop/SideBar";
import RecommendedDesign from "../../components/Shop/RecommendedDesign";
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
  const [activeTab, setActiveTab] = useState("product");
  useEffect(() => {
    console.log(shop);
  }, [shop]);

  return (
    <div>
      <Banner shop={shop} />
      <div className="px-30px">
        <ShopInfo shop={shop} />
        <Tabs tabs={tabs} setActiveTab={setActiveTab} />
        {activeTab === "product" && (
          <div>
            <RecommendedDesign pinnedProducts={shop.pinnedProducts} />
            <div className="flex py-20px">
              <div className="hidden sm:block w-20% min-w-200px mr-3">
                <SideBar />
              </div>
              <div className="flex-1">
                <ProductList products={shop.products} />
              </div>
            </div>
          </div>
        )}
        {router.query.tab === "story" && (
          <div className="max-w-760px w-full mx-auto mt-50px mb-100px">
            <p className="text-md text-gray-800">{shop.story}</p>
          </div>
        )}
        <div className="w-800px mx-auto">
          {activeTab === "policy" && <RefundPolicy />}
        </div>
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
    params: { id: item.account.toString() },
  }));
  console.log(paths);
  return { paths, fallback: true };
}

// This also gets called at build time

export async function getStaticProps(context) {
  const { shop } = JSON.parse(
    JSON.stringify((await apiGetShopInfo(context.params.id)).data)
  );
  console.log("shop", shop);
  return {
    props: {
      shop,
    },
  };
}
