import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../../lib/tool";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/actions/globalAction";
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
        <div className="w-full py-15px flex">
          <img src={shop.logo} className="w-150px h-150px" alt="Shop Logo" />
          <div className="flex justify-between w-full px-20px border-r border-gray-600">
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
            {/* {favoriteShops.find(
              (favoriteShop) => favoriteShop._id === shop._id
            ) ? (
              <div
                onClick={() => handleFavorite(shop._id)}
                className={classes.cta}
              >
                <Button
                  text="關注中"
                  backgroundColor="white"
                  border="true"
                  color="black"
                />
              </div>
            ) : (
              <div
                onClick={() => handleFavorite(shop._id)}
                className={classes.cta}
              >
                <Button text="加入關注" iconType="add" />
              </div>
            )} */}
          </div>
          <div>
            <div className="flex items-center">
              <img src={user.picture} alt="user photo" />
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
