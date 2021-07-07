import React, { useState } from "react";
import PropTypes from "prop-types";
import { PlusIcon, CheckIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import Stars from "../../Global/Stars";
import Button from "../Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { addToFavorite } from "../../redux/actions/globalAction";
// import { toggleChat } from "../../../store/chat/chatAction";
const ShopInfo = ({ product, shopInfo }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [shopFollowed, setShopFollowed] = useState(false);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const followShop = (id) => {
    const type = "shop";
    // dispatch(addToFavorite(id, type));
  };
  const directToShop = (account) => {
    router.push(`/shops/${account}?tab=product`);
  };
  const patchChat = async (id) => {
    try {
      dispatch(toggleChat());
    } catch (error) {
      console.log("chat error");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full  p-20px rounded">
        <h2 className="text-lg sm:text-2xl font-bold">關於設計館</h2>
        <div className="flex items-center py-20px">
          <img
            onClick={() => directToShop(product.publishedBy.account)}
            className="cursor-pointer w-100px h-100px mr-20px"
            src={product && product.publishedBy.logo}
            alt="shop-logo"
          />
          <div>
            <p>{product && product.publishedBy.name}</p>
            <Stars />
          </div>
        </div>
        {favoriteShops && (
          <div className="flex  w-full justify-between items-center rounded cursor-pointer">
            {shopFollowed ? (
              <Button
                bgColor="text-main-pink text-sm"
                textColor="text-white"
                title="關注中"
                Icon={CheckIcon}
              />
            ) : (
              <Button
                borderColor="text-main-pink mr-10px border-main-pink border rounded"
                textColor="text-main-pink text-sm"
                title="加入關注"
                Icon={PlusIcon}
              />
            )}
            <Button
              borderColor="text-light-blue text-sm border-light-blue border rounded"
              title="聯絡店家"
              Icon={ChatAlt2Icon}
            />
          </div>
        )}
        <div>
          {shopInfo &&
            shopInfo.products.map((product) => (
              <>
                <img
                  className="w-300px h-300px"
                  key={product.name}
                  src={product.images[0]}
                  alt={product.name}
                />
                <p>{product.name}</p>
              </>
            ))}
        </div>
        <hr className="my-20px" />
        <div className="flex items-center">
          <h1 className="text-md sm:text-lg">Share</h1>
        </div>
      </div>
    </div>
  );
};

ShopInfo.propTypes = {
  product: PropTypes.object,
  shopInfo: PropTypes.object,
};

export default ShopInfo;
