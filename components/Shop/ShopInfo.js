import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../lib/tool";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { addToFavorite } from "../../redux/actions/globalAction";
const ShopInfo = ({ shop }) => {
  const { user } = shop;
  const dispatch = useDispatch();
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const handleFavorite = (id) => {
    const type = "shop";
    dispatch(addToFavorite(id, type));
  };
  return (
    <>
      {shop && user && (
        <div className=" py-15px flex flex-col md:flex-row">
          <div className="w-full flex">
            <img
              src={shop.logo}
              className="hidden md:block w-100px h-100px lg:w-150px lg:h-150px"
              alt="Shop Logo"
            />
            <div className="flex justify-between w-full px-20px md:border-r border-gray-600">
              <div>
                <h2>{shop.name}</h2>
                <div>
                  <p>
                    開館日期
                    <span className="ml-3">
                      {shop.createdAt && formatDate(shop.createdAt)}
                    </span>
                  </p>
                </div>
                <div>
                  <p>商品數量</p>
                  <span>{shop.products.length}</span>
                </div>
                <div>
                  <p>關注人數</p>
                  <span>288</span>
                </div>
              </div>
              {favoriteShops.find(
                (favoriteShop) => favoriteShop._id === shop._id
              ) ? (
                <div onClick={() => handleFavorite(shop._id)}>
                  {/* <Button
                  text="關注中"
                  backgroundColor="white"
                  border="true"
                  color="black"
                /> */}
                  <button>關注中</button>
                </div>
              ) : (
                <div onClick={() => handleFavorite(shop._id)}>
                  {/* <Button text="加入關注" iconType="add" /> */}
                  <button>加入關注</button>
                </div>
              )}
            </div>
          </div>

          <div className="min-w-300px px-3">
            <div className="flex space-x-2 items-center">
              <Image
                src={user.picture}
                width={60}
                height={60}
                className="rounded-full"
                alt="user photo"
              />
              <span>{user.name}</span>
            </div>
            <div className="mt-10px mb-20px">
              <button
                text="聯絡設計師"
                backgroundColor="#fff"
                color="black"
                border="true"
              ></button>
            </div>
            <div className="">
              <p>回應率</p>
              <span>98%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ShopInfo.propTypes = {
  shop: PropTypes.object,
  user: PropTypes.object,
};

export default ShopInfo;
