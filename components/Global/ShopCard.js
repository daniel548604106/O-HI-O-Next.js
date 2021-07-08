import React, { useState, useEffect } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";

import {
  addToFavorite,
  openLoginModal,
} from "../../redux/actions/globalAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const ShopCard = ({ shop }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isUserLoggedIn } = useSelector((state) => state.user);
  const { favoriteShops } = useSelector((state) => state.global);
  const followShop = () => {
    if (isUserLoggedIn) {
      const type = "shop";
      dispatch(addToFavorite(shop._id, type));
      return;
    }
    dispatch(openLoginModal());
  };
  const [followedFavoriteShop, setFollowedFavoriteShop] = useState(-1);

  useEffect(() => {
    if (!favoriteShops) return;
    const checkFollowedShop = () => {
      const shopIds = favoriteShops.map((item) => {
        return item._id;
      });
      setFollowedFavoriteShop(shopIds.indexOf(shop._id));
    };
    checkFollowedShop();
  }, [shop, favoriteShops]);

  return (
    <div className="overflow-x-auto border-1 border-gray-400 hover:opacity-70">
      <div
        onClick={() => {
          router.push({
            pathname: "/shops/[shop]",
            query: { shop: shop.account, tab: "product" },
          });
        }}
      >
        <div className="flex cursor-pointer ">
          <div className="flex-auto">
            <img
              className="w-full h-auto"
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div>
              <img
                className="h-auto w-full"
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto w-full"
                src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10px flex justify-between">
        <div>
          <p className="mb-5px text-md font-semibold ">{shop.name}</p>
          <p className="text-sm text-gray-600">
            Followers <span>{shop.followers}</span>
          </p>
        </div>

        <button
          onClick={() => followShop()}
          className={`flex items-center bg-main-pink rounded-4 text-white text-sm cursor-pointer px-10px py-2 ${
            followedFavoriteShop !== -1
              ? "bg-white border-1 border-black text-black"
              : ""
          }`}
        >
          {followedFavoriteShop === -1 ? (
            <>
              <PlusIcon className="h-5" />
              <span className="text-sm sm:text-sm ml-3px">Follow</span>
            </>
          ) : (
            <>
              <CheckIcon className="h-5" />
              <span className="text-sm sm:text-sm ml-3px">Following</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.object,
};

export default ShopCard;
