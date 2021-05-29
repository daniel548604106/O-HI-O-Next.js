import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../components/Global/ProductCard";
import { useSelector } from "react-redux";
import ShopCard from "../../components/Global/ShopCard";
import Tabs from "../../components/Global/Tabs.js";
import Empty from "../../components/Global/Empty";
const Favorite = () => {
  const router = useRouter();
  const favoriteProducts = useSelector(
    (state) => state.global.favoriteProducts
  );
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const [showProducts, setShowProducts] = useState(true);

  const tabs = [
    {
      name: "商品",
      location: "products",
    },
    {
      name: "專注的設計館",
      location: "shops",
    },
  ];

  useEffect(() => {
    router.query.tab === "products"
      ? setShowProducts(true)
      : setShowProducts(false);
  }, [router.query, favoriteProducts]);
  return (
    <div className="py-50px max-w-1200px mx-auto px-15px">
      <h2 className="text-xl  font-semibold sm:text-2xl ">慾望清單</h2>
      <Tabs tabs={tabs} />
      <hr />

      <div className="mt-20px min-h-60vh">
        {showProducts ? (
          <div className="grid grid-cols-1 gap-4">
            {favoriteProducts.length > 0 ? (
              favoriteProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <Empty title="你的慾望清單目前是空的喔！" />
            )}
          </div>
        ) : (
          <div
            className={favoriteShops.length > 0 ? "grid grid-cols-1 gap-4" : ""}
          >
            {favoriteShops && favoriteShops.length ? (
              favoriteShops.map((shop) => (
                <ShopCard key={shop._id} shop={shop}></ShopCard>
              ))
            ) : (
              <Empty title="你目前尚未關注任何設計館喔！" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
